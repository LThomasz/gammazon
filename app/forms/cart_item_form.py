from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField, DateTimeField, FloatField
from wtforms.validators import DataRequired
from datetime import datetime

class CartItemForm(FlaskForm):
  user_id = IntegerField('User Id', validators=[DataRequired()])
  item_id = IntegerField('Item Id', validators=[DataRequired()])
  price = FloatField('Price', validators=[DataRequired()])
  quantity = IntegerField('Quantity', validators=[DataRequired()])
  created_at = DateTimeField('Current Date', default=datetime.utcnow, validators=[DataRequired()])
  submit = SubmitField("Create Product Listing")
