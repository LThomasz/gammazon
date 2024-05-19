from app.models import db, Cart, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_carts():
  cart1 = Cart(
    user_id = 1,
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  cart2 = Cart(
    user_id = 2,
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  cart3 = Cart(
    user_id = 3,
    created_at = datetime.now(),
    updated_at = datetime.now()
  )
  cart4 = Cart(
    user_id = 4,
    created_at = datetime.now(),
    updated_at = datetime.now()
  )

  db.session.add(cart1)
  db.session.add(cart2)
  db.session.add(cart3)
  db.session.add(cart4)
  db.session.commit()

def undo_carts():
  if environment == "production":
    db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
  else:
    db.session.execute(text("DELETE FROM carts"))

  db.session.commit()
