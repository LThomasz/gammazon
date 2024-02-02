from app.models import db, Item, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_items():
  item1 = Item(
    user_id = 2,
    category_id = 2,
    name = 'Island of the Blue Dolphins',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/book1.jpg',
    description = 'Island of the Blue Dolphins by Scott O\'Dell is the Newbery Medal wililng story based on the true story of an American Indian woman who lived on San Nicolas Island.',
    price = 8.63,
    created_at = datetime.now()
  )

  db.session.add(item1)
  db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
