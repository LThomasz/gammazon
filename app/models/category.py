from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Category(db.Model):
  __tablename__ = "categories"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False)
  description = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'description': self.description,
      'created_at': self.created_at,
      'updated_at': self.updated_at
    }
