from datetime import datetime

class Lead:
    def __init__(self, gym_name, owner_name, email, phone, location="Global"):
        self.gym_name = gym_name
        self.owner_name = owner_name
        self.email = email
        self.phone = phone
        self.location = location
        self.created_at = datetime.utcnow()

    def to_dict(self):
        return {
            "gymName": self.gym_name,
            "ownerName": self.owner_name,
            "email": self.email,
            "phone": self.phone,
            "location": self.location,
            "date": self.created_at
        }