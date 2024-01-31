from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Order(db.Model):
  __tablename__ = "orders"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  order_item = db.relationship('OrderItem', back_populates = 'order')

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'created_at': self.created_at
    }
