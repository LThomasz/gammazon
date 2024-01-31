from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
  __tablename__ = "reviews"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('items.id')), nullable=False)
  rating = db.Column(db.Integer, nullable=False)
  review = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'item_id': self.item_id,
      'rating': self.rating,
      'review': self.review,
      'created_at': self.created_at,
      'updated_at': self.updated_at
    }
