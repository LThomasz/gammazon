# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from datetime import datetime
# from .item import Item

# class Cart(db.Model):
#   __tablename__ = "carts"

#   if environment == "production":
#     __table_args__ = {'schema': SCHEMA}

#   id = db.Column(db.Integer, primary_key=True)
#   user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
#   created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
#   updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

#   cart_item = db.relationship('CartItem', back_populates = 'cart')

#   def to_dict(self):
#     return {
#       'id': self.id,
#       'user_id': self.user_id,
#       'created_at': self.created_at,
#       'updated_at': self.updated_at
#     }
