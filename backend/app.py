import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from twilio.rest import Client
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database Setup
client = MongoClient(os.getenv("MONGO_URI"))
db = client.synexis_db

# Twilio Setup
twilio_client = Client(os.getenv("TWILIO_SID"), os.getenv("TWILIO_AUTH"))

@app.route('/api/capture-lead', methods=['POST'])
def capture_lead():
    data = request.json
    # Save to MongoDB
    db.leads.insert_one(data)
    
    # WhatsApp Notification
    try:
        twilio_client.messages.create(
            from_='whatsapp:+14155238886', # Default Twilio Sandbox Number
            body=f"🔥 New Lead: {data['gymName']}\nOwner: {data['ownerName']}\nPhone: {data['phone']}",
            to=f"whatsapp:{os.getenv('ADMIN_PHONE')}"
        )
    except Exception as e:
        print(f"Twilio Error: {e}")

    return jsonify({"status": "success"}), 201


# GET All Leads for Admin
@app.route('/api/leads/all', methods=['GET'])
def get_all_leads():
    leads = list(db.leads.find().sort("date", -1))
    for lead in leads:
        lead['_id'] = str(lead['_id']) # JSON serializable banane ke liye
    return jsonify(leads)

# Stripe Checkout Session
@app.route('/api/stripe/create-checkout', methods=['POST'])
def create_checkout():
    data = request.json
    try:
        # Stripe API call to create session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{'price': data['priceId'], 'quantity': 1}],
            mode='subscription',
            success_url='https://synexislabz.com/success',
            cancel_url='https://synexislabz.com/cancel',
        )
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify(error=str(e)), 403
    
if __name__ == '__main__':
    app.run(port=5000)