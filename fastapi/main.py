from fastapi import FastAPI
from database.database import Base, engine
from models import user
# from pydantic import BaseModel,EmailStr,Field,field_validator,StrictInt,ConfigDict
# from typing import Optional
from router.router import router
Base.metadata.create_all(bind=engine)
app=FastAPI()
app.include_router(router)

# @app.get("/")
# def home():
#     return "message Hello fastAPI"

# @app.get("/products")
# def get_products():
#     return [{"product1":"laptop",
#              "product2":"smartphone"}]
  
# class Adress(BaseModel):
#     location: str
#     country:str
#     pincode:int  
    
# class Users(BaseModel):
#     name:str=Field(min_length=3)
#     age:StrictInt=Field(gt=18,lt=60)
#     email:EmailStr|None=None
#     # country: str = "India"
#     skills:list[str]
#     # address:Adress
    
#     @field_validator("name")
#     @classmethod
#     def validate_name(cls,value):
#         if not value.strip():
#              raise ValueError("name cannot be empty")
#         return value
    
# @app.post("/users")
# def get_users(users: Users):
#   return users
# @app.get("/users")
# def get_user():
#     return 
# @app.post("/users")
# def get_users(users: Users):
#     data=users.model_dump()
#     # print(data)
#     return data

# class Product(BaseModel):
#     name: str
#     price: int
#     quantity: int
    
# @app.post("/product")
# def get_products(p:Product):
#     total= p.price*p.quantity
#     return p.name,total

# class UserRequest(BaseModel):
#     model_config=ConfigDict(extra="forbid")
#     name:str
#     password:str
#     email:EmailStr
    
# class UserResponse(BaseModel):
#     name:str
#     email:EmailStr
    
    
# @app.post("/users",response_model=UserResponse)
# def get_user(user:UserRequest):
#     return user






