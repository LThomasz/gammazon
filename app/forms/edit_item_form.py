from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, IntegerField, SubmitField, DateTimeField, FloatField
from wtforms.validators import DataRequired
from ..api.aws_images import ALLOWED_EXTENSIONS
from datetime import datetime

class EditItemForm(FlaskForm):
  user_id = IntegerField('User Id', validators=[DataRequired()])
  category_id = IntegerField('Category Id', validators=[DataRequired()])
  name = StringField('Product Name', validators=[DataRequired()])
  image = FileField("Image",validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
  description = StringField('Description', validators=[DataRequired()])
  price = FloatField('Price', validators=[DataRequired()])
  created_at = DateTimeField('Current Date', default=datetime.utcnow, validators=[DataRequired()])
  submit = SubmitField("Create Product Listing")
