from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from twilio.rest import Client
import os

leads_bp = Blueprint('leads', __name__)

# Config
client = MongoClient(os.getenv("MONGO_URI"))
db = client.synexis_db
twilio_client = Client(os.getenv("TWILIO_SID"), os.getenv("TWILIO_AUTH"))

@leads_bp.route('/capture', methods=['POST'])
def capture_lead():
    data = request.json
    # 1. MongoDB Save
    db.leads.insert_one(data)
    
    # 2. WhatsApp Alert (Using Twilio)
    try:
        twilio_client.messages.create(
            from_='whatsapp:+14155238886',
            body=f"🚀 *Synexis Labz Alert* \n\nNew lead from: {data['gymName']}\nOwner: {data['ownerName']}\nPlan: {data.get('plan', 'Trial')}",
            to=f"whatsapp:{os.getenv('ADMIN_PHONE')}"
        )
    except Exception as e:
        print(f"WhatsApp Error: {e}")

    return jsonify({"msg": "Success"}), 201