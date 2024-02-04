from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


def seed_reviews():
  review1 = Review(
    user_id = 1,
    item_id = 1,
    rating = 4,
    review = 'Great story I remember reading it in school as a kid',
    created_at = datetime.now(),
    updated_at = datetime.now()
  )

  db.session.add(review1)
  db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
