# from fastapi import APIRouter,HTTPException
# from fastapi import Path,Query
# from data.user import users
# from schema.userschema import *;
# router=APIRouter()



# @router.get("/users",response_model=list[Response])
# def get_router():
#      return users
 
 
# @router.post("/users",response_model=Response)
# def add_student(user:CreateUser):
#     new_id=len(users)+1
#     new_student={
#         "id":new_id,
#         "name":user.name,
#         "age":user.age
#     }
#     users.append(new_student)
#     return new_student
# @router.get("/users/{userId}",response_model=Response)
# def get_students(userId:int=Path(gt=0)):
#     for student in users:
#         if student["id"]==userId:
#             return student
#     raise HTTPException(
#         status_code=404,
#         detail="not found"
#     )
        

# @router.put("/users/{user_id}",response_model=Response)

# def update(user_id:int,user:PutUser):
#     for student in users:
#         if student["id"]==user_id:
#             student["name"]=user.name
#             student["age"]=user.age
#             return student
#     raise HTTPException(
#         status_code=404,
#         detail="Student not found"
#     )


# @router.patch("/users/{userId}",response_model=Response)
# def patch(userId:int, user:PatchUser):
#     for student in users:
#         if student["id"]==userId:
#             if user.name is not None:
#                 student["name"]=user.name
#             if user.age is not None:
#                 student["age"]=user.age
#             return student
#     raise HTTPException(
#         status_code=404,
#         detail="not found"
#     )
    
    
    
# @router.delete("/users/{userId}")

# def delete(userId:int):
#     for student in users:
#         if student["id"]== userId:
#             users.remove(student)
#             return "student deleted"
#     raise HTTPException(
#         status_code=404,
#         detail="not found"
#     )

     
     
# @router.get("/users")
# def get_age(names: str,ages:int|None=Query(default=None,gt=18)):
#     if ages is None and names is None:
#         return users
#     result=[]
#     for student in users:
#         if student["name"].lower()==names.lower():
#             if student["age"]==ages:
#                 result.append(student)
#     if not result:
#          raise HTTPException(
#         status_code=404,
#         detail="not found"
#          )
#     return result

# @router.get("/users")
# def sorting(sort_by:str=Query(...,pattern="^(age|name)$"),order:str=Query("asc",pattern="^(asc|desc)$")):
#     if sort_by=="age":
#         return sorted(users,key=lambda x:x["age"],reverse=(order=="desc"))
#     if sort_by =="name":
#         return sorted(users,key = lambda x:x["name"],reverse=(order=="desc"))
#     return users
        
# @router.get("/users")
# def pagination(skip:int=Query(gt=0), limit:int=Query(gt=0,lt=50) ):
#     return users[skip:skip+limit]

