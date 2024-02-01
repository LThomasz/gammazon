from app.models import db, Category, environment, SCHEMA
from sqlalchemy.sql import text

def seed_categories():
    cat1 = Category(
      name = 'Electronics', description = 'From USBs to Raspberry Pis, all electronic components and gadgets')
    cat2 = Category(
      name = 'Books', description = 'All forms of literature available on Gammazon')
    cat3 = Category(
      name = 'Musical Instruments', description = 'All the musical instruments available')

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)
    db.session.commit()

def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))

    db.session.commit()
