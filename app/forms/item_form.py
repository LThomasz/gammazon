from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, IntegerField, SubmitField, DateTimeField
from wtforms.validators import DataRequired
from ..api.aws_images import ALLOWED_EXTENSIONS

class ItemForm(FlaskForm):
  user_id = IntegerField('User Id', validators=[DataRequired()])
  category_id = IntegerField('Category Id', validators=[DataRequired()])
  name = StringField('Product Name', validators=[DataRequired()])
  image = FileField("Image",validators=[FileAllowed(list(ALLOWED_EXTENSIONS)), FileRequired()])
  description = StringField('Description', validators=[DataRequired()])
  price = IntegerField('Price', validators=[DataRequired()])
  created_at = DateTimeField('Current Date', validators=[DataRequired()])
  submit = SubmitField("Create Product Listing")
