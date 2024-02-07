from flask import Blueprint, render_template, redirect, request
from app.models import Item, db
from app.forms.item_form import ItemForm
from .aws_images import upload_img_to_s3, get_unique_filename_img, remove_img_from_s3

item_routes = Blueprint('item', __name__)

@item_routes.route('/')
def items():
  all_items = Item.query.all()
  return {'items': [item.to_dict() for item in all_items]}

@item_routes.route('/new-item')
def newItem():
  form = ItemForm()
  return render_template('item_form.html', form=form)

@item_routes.route('/new-item', methods=['POST'])
def newItemSub():
  form = ItemForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print(form.data)
  if form.validate_on_submit():
    data = form.data
    form.image.data.filename = get_unique_filename_img(form.image.data.filename)
    newItem = Item(user_id=data['user_id'],
                   category_id=data['category_id'],
                   name=data['name'],
                   image=upload_img_to_s3(form.image.data).get('url'),
                   description=data['description'],
                   price=data['price'],
                   created_at=data['created_at'])
    db.session.add(newItem)
    db.session.commit()
    return newItem.to_dict()
  return 'Bad Data'

@item_routes.route('/<int:itemId>')
def singleItem(itemId):
  item = Item.query.get(itemId)
  return item.to_dict()

@item_routes.route('/<int:itemId>/edit', methods=['PUT'])
def editItem(itemId):
  form = ItemForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print(form.data)
  if form.validate_on_submit():
    oldItem = Item.query.get(itemId)
    data = form.data
    form.image.data.filename = get_unique_filename_img(form.image.data.filename)
    oldItem.user_id = data['user_id']
    oldItem.category_id = data['category_id']
    oldItem.name = data['name']
    oldItem.image = upload_img_to_s3(form.image.data).get('url')
    oldItem.description = data['description']
    oldItem.price = data['price']
    db.session.commit()
    return oldItem.to_dict()
  return form.errors

@item_routes.route('/<int:itemId>', methods=['DELETE'])
def deleteItem(itemId):
  item = Item.query.get(itemId)
  remove_img_from_s3(item.to_dict()['image'])
  db.session.delete(item)
  db.session.commit()
  return item.to_dict()

@item_routes.route('/current/<int:id>')
def userItems(id):
  userItems = Item.query.filter(Item.user_id == id).all()
  return { 'item': [item.to_dict() for item in userItems]}
