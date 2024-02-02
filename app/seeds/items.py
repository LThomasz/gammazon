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
  item2 = Item(
    user_id = 2,
    category_id = 1,
    name = 'Projection Alarm Clock',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/ele-clock.jpg',
    description = 'Digital alarm clock with built-in button batter, curved screen, and clear projection that is perfect for any bedroom.',
    price = 20.32,
    created_at = datetime.now()
  )
  item3 = Item(
    user_id = 1,
    category_id = 1,
    name = 'Electronic Hammer',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/ele-hammer.jpg',
    description = 'Never tire again when using a hammer! The electronic hammer makes any job easier and makes a perfect gift for family and friends.',
    price = 23.54,
    created_at = datetime.now()
  )
  item4 = Item(
    user_id = 1,
    category_id = 3,
    name = 'Harmonica',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/harmonica.jpg',
    description = 'A classic harmonica perfect for all ages.',
    price = 10.52,
    created_at = datetime.now()
  )

  db.session.add(item1)
  db.session.add(item2)
  db.session.add(item3)
  db.session.add(item4)
  db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
