from pydantic import BaseModel,Field
class CreateUser(BaseModel):
    name:str=Field(min_length=3)
    age:int=Field(gt=18)

class PutUser(BaseModel):
    name:str=Field(min_length=3)
    age:int=Field(gt=18)  

class PatchUser(BaseModel):
    name:str| None=None
    age:int| None=None
    
class Response(BaseModel):
    id : int
    name:str
    age:int
    