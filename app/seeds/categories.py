from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text

def seed_categories():
  cat1 = Category(
    name = 'Electronics', description = 'From USBs to Raspberry Pis, all electronic components and gadgets')
  cat2 = Category(
    name = 'Books', description = 'All forms of literature available on Gammazon')
  cat3 = Category(
    name = 'Musical Instruments', description = 'All the musical instruments available')
  cat4 = Category(
    name = 'Automotive', description = 'The equipment perfect for your garage or vehicle')
  cat5 = Category(
    name = 'Jewelry & Watches', description = 'An array of accessories from numerous jewelers and manugacturers')
  cat6 = Category(
    name = 'Pet Supplies', description = 'Animal and pet care supplies and accessories')

  db.session.add(cat1)
  db.session.add(cat2)
  db.session.add(cat3)
  db.session.add(cat4)
  db.session.add(cat5)
  db.session.add(cat6)
  db.session.commit()

def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))

    db.session.commit()
