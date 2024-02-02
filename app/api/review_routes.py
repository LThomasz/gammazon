from flask import Blueprint, render_template, redirect, request
from app.models import Review, db
from app.forms.review_form import ReviewForm

review_routes = Blueprint('review', __name__ )

@review_routes.route('/')
def reviews():
  all_reviews = Review.query.all()
  return {'reviews': [review.to_dict() for review in all_reviews]}

@review_routes.route('/new-review', methods=['GET', 'POST'])
def newReview():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    data = form.data
    newReview = Review(user_id = data['user_id'],
                       item_id = data['item_id'],
                       rating = data['rating'],
                       review = data['review'],
                       created_at = data['created_at'],
                       updated_at = data['updated_at'])
    db.session.add(newReview)
    db.session.commit()
    return redirect('/api/reviews')
  return 'Bad Data'

@review_routes.route('/<int:id>/edit', methods=['PUT'])
def editReview():
  form = ReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    oldReview = Review.query.get(id)
    data = form.data
    oldReview.user_id = data['user_id']
    oldReview.item_id = data['item_id']
    oldReview.rating = data['rating']
    oldReview.review = data['review']
    oldReview.created_at = data['created_at']
    oldReview.updated_at = data['updated_at']
    db.session.commit()
    return redirect('/api/reviews')
  return 'Bad Data'

@review_routes.route('/<int:id>/delete', methods=['DELETE'])
def deleteReview():
  review = Review.query.get(id)
  db.session.delete(review)
  db.session.commit()
  return 'Success!'
