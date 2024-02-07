from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
  review1 = Review(
    user_id = 1,
    item_id = 1,
    rating = 4,
    review = 'Great story I remember reading it in school as a kid.',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  review2 = Review (
    user_id = 1,
    item_id = 5,
    rating = 5,
    review = 'It pays for itself, already it\'s saved me from being stuck on the road three times.',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  review3 = Review (
    user_id = 1,
    item_id = 6,
    rating = 5,
    review = 'Wriststrap was the perfect length and it looks beautiful',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  review4 = Review (
    user_id = 2,
    item_id = 3,
    rating = 3,
    review = 'Works just great, when I can reach. So much faster than a normal hammer, but the cord is way too short.',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  review5 = Review (
    user_id = 2,
    item_id = 4,
    rating = 4,
    review = 'I really enjoy messing around with this harmonica and might upgrade to a better one later, but this is a really good starter for the price.',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  review6 = Review (
    user_id = 2,
    item_id = 7,
    rating = 1,
    review = 'It came broken, do not buy.',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )

  db.session.add(review1)
  db.session.add(review2)
  db.session.add(review3)
  db.session.add(review4)
  db.session.add(review5)
  db.session.add(review6)
  db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
