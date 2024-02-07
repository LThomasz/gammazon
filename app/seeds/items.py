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
  item5 = Item(
    user_id = 3,
    category_id = 4,
    name = 'Car Jump Starter with Air Compressor',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/jumpstarter.jpg',
    description = '3000A current jump starter battery which also has an air compressor.',
    price = 78.99,
    created_at = datetime.now()
  )
  item6 = Item(
    user_id = 3,
    category_id = 5,
    name = 'SWAROVSKI Women\'s Cosmopolitan Crystal Watch',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/watch.jpg',
    description = 'An elegant crystalline watch from the crystal watch collection',
    price = 192.23,
    created_at = datetime.now()
  )
  item7 = Item(
    user_id = 1,
    category_id = 5,
    name = 'Phoenix Necklace made with Austrian Crystals',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/necklace.jpg',
    description = 'A crystal necklace symbolizing rebirth and eternity',
    price = 26.49,
    created_at = datetime.now()
  )
  item7 = Item(
    user_id = 2,
    category_id = 6,
    name = 'Self Cleaning Slicker Brush for Cats & Dogs',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/petbrush.jpg',
    description = 'Made for easy cleaning at the press of a button',
    price = 8.99,
    created_at = datetime.now()
  )
  item8 = Item(
    user_id = 3,
    category_id = 2,
    name = 'The Willows',
    image = 'https://gammazon-767398031119.s3.us-west-1.amazonaws.com/willows.jpg',
    description = 'The Willows by Algernon Blackwood is praised as one of the greatest horror stories ever written.',
    price = 26.95,
    created_at = datetime.now()
  )



  db.session.add(item1)
  db.session.add(item2)
  db.session.add(item3)
  db.session.add(item4)
  db.session.add(item5)
  db.session.add(item6)
  db.session.add(item7)
  db.session.add(item8)

  db.session.commit()

def undo_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM items"))

    db.session.commit()
