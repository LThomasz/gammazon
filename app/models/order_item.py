from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class OrderItem(db.Model):
  __tablename__ = "order_items"

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  order_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('orders.id')), nullable=False, primary_key=True)
  item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('items.id')), nullable=False, primary_key=True)
  total_price = db.Column(db.Float(10, 2), nullable = False)
  quantity = db.Column(db.Integer, nullable = False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

  order = db.relationship('Order', back_populates='order_item')
  itemm = db.relationship('Item', back_populates='item_order')
