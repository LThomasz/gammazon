from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class CartItem(db.Model):
  __tablename__ = "cart_items"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  cart_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('carts.id')), nullable=False, primary_key=True)
  item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('items.id')), nullable=False, primary_key=True)
  price = db.Column(db.Float(5, 2), nullable = False)
  quantity = db.Column(db.Integer, nullable = False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  cart = db.relationship('Cart', back_populates='cart_item')
  item = db.relationship('Item', back_populates='item_cart')
