from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, IntegerField, SubmitField, DateTimeField
from wtforms.validators import DataRequired
from datetime import datetime

class ReviewForm(FlaskForm):
  user_id = IntegerField('User Id', validators=[DataRequired()])
  item_id = IntegerField('Item Id', validators=[DataRequired()])
  rating = IntegerField('Rating', validators=[DataRequired()])
  review = StringField('Review', validators=[DataRequired()])
  created_at = DateTimeField('Date created', default=datetime.utcnow, validators=[DataRequired()])
  updated_at = DateTimeField('Date updated', default=datetime.utcnow, validators=[DataRequired()])
