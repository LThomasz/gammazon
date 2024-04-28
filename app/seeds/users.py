from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password1')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password2')
    gertrude = User(
        username='gertrude', email='groot@aa.io', password='password3')
    demo1 = User(username='Demo4', email='demo4@aa.io', password='password4')
    demo2 = User(username='Demo5', email='demo5@aa.io', password='password5')
    demo3 = User(username='Demo6', email='demo6@aa.io', password='password6')
    demo4 = User(username='Demo7', email='demo7@aa.io', password='password7')
    demo5 = User(username='Demo8', email='demo8@aa.io', password='password8')
    demo6 = User(username='Demo9', email='demo9@aa.io', password='password9')
    demo7 = User(username='Demo10', email='demo10@aa.io', password='password10')
    demo8 = User(username='Demo1', email='demo1@aa.io', password='password11')
    demo9 = User(username='Demo2', email='demo2@aa.io', password='password12')
    demo10 = User(username='Demo3', email='demo3@aa.io', password='password13')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(gertrude)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
