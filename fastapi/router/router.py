from fastapi import APIRouter,Depends,HTTPException,Query
from sqlalchemy.orm import Session
from database.database import get_db
from models.user import User
from schema.userschema import CreateUser,PutUser,PatchUser
from sqlalchemy import or_

router=APIRouter()

@router.get("/users")
def get_users(db:Session=Depends(get_db)):
    users=db.query(User).all()
    return users


@router.post("/users")
def add_users(user:CreateUser,db:Session=Depends(get_db)):
    existing_user=db.query(User).filter(
        User.name==user.name
    ).first()
    if existing_user:
        raise HTTPException(
            status_code=404,
            detail="already exists"
        )
    new_user=User(name=user.name,
                  age=user.age)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.get("/users/{userid}")
def get_id(userid:int, db:Session=Depends(get_db)):
    user=db.query(User).filter(
         User.id==userid
     ).first()
     
    if user is None:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    return user

@router.get("/users/age")
def sorting(
        sort_by: str=Query("name",pattern="^(name|age)$"),
        order:str=Query("asc",pattern="^(asc|desc)$"),
            db:Session=Depends(get_db)):
    query=db.query(User)
    
    if sort_by=="name":
        column=User.name
    else:
        column=User.age
    if order=="desc":
        query=query.order_by(column.desc())
    else:
        query=query.order_by(column.asc()) 
        
    return query.all()   



@router.put("/users")
def update_data(userid:int,
                user:PutUser,
                db:Session=Depends(get_db)):
    users=db.query(User).filter(
        User.id==userid
    ).first()
    users.name=user.name
    users.age=user.age
    db.commit()
    db.refresh(users)
    return users
    
    
@router.patch("/users")
def partial(userid:int,
            user:PatchUser,
            db:Session=Depends(get_db)):
    existing=db.query(User).filter(
        User.id==userid
        
    ).first()
    
    if user.name is not None:
        existing.name=user.name
        
    if user.age is not None:
        existing.age=user.age
    db.commit()
    db.refresh(existing)
    return existing

@router.delete("/users")

def delete(userid:int,
           db:Session=Depends(get_db)):
    found=db.query(User).filter(
        User.id==userid
        
    ).first()
    if found is None:
        raise HTTPException(
            status_code=404,
            detail="not found"
        )
    db.delete(found)
    db.commit() 
    return "deleted"
    