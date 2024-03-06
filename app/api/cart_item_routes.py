from flask import Blueprint, render_template, redirect, request
from app.models import CartItem, db
from app.forms.cart_item_form import CartItemForm

cart_item_routes = Blueprint('cart_item', __name__)

@cart_item_routes.route('/<int:userId>')
def cartItems(userId):
  cart_items = CartItem.query.filter(CartItem.user_id == userId).all()
  return { 'cartItems': [item.to_dict() for item in cart_items]}

@cart_item_routes.route('/', methods=['POST'])
def addCartItem():
  form = CartItemForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    data = form.data
    cartItem = CartItem(user_id = data['user_id'],
                        item_id = data['item_id'],
                        price = data['price'],
                        quantity = data['quantity'],
                        created_at=data['created_at'])
    db.session.add(cartItem)
    db.session.commit()
    return cartItem.to_dict()
  return form.errors

@cart_item_routes.route('/<int:itemId>/<int:userId>', methods=['DELETE'])
def deleteCartItem(itemId, userId):
  cartItem = CartItem.query.filter(CartItem.item_id == itemId and CartItem.user_id == userId);
  db.session.delete(cartItem)
  db.session.commit()
  return cartItem.to_dict()
