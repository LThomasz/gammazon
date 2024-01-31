from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Item(db.Model):
  __tablename__ = "items"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)
  name = db.Column(db.String(255), nullable=False)
  image = db.Column(db.String(255), nullable=False)
  description = db.Column(db.String(255), nullable=False)
  price = db.Column(db.Float(5, 2), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  item_cart = db.relationship('CartItem', back_populates = 'item')
  item_order = db.relationship('OrderItem', back_populates = 'itemm')
  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'category_id': self.category_id,
      'name': self.name,
      'image': self.image,
      'description': self.description,
      'price': self.price,
      'created_at': self.created_at
    }
