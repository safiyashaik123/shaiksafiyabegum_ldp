from sqlalchemy.orm import relationship
from sqlalchemy import String,Integer,Column,ForeignKey
from database.database import Base

class Order(Base):
    __tablename__="order"
    
    order_id=Column(Integer,primary_key=True,index=True)
    
    product=Column(String,nullable=False)
    
    # user_id=Column(Integer,ForeignKey("users.id"))
    
    # user=relationship("User",back_populates="order")