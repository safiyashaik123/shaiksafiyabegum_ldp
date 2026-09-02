from sqlalchemy import Column,Integer, String
from sqlalchemy.orm import relationship
from database.database import Base

class User(Base):
    __tablename__="users"
    
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String,nullable=False)
    age=Column(Integer,unique=True)
    email=Column(String)
    
    # order=relationship("Order",back_populates="user")
    