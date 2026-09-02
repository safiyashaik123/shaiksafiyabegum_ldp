from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.models.department_model import Department
from app.database.database import get_db

from app.services.department_db_service import (
    create_department,
    get_all_departments,
    get_department_by_id,
    update_department,
    patch_department,
    delete_department
)


router = APIRouter(
    prefix="/departments",
    tags=["Departments"]
)


# ==================================================
# CREATE
# ==================================================

@router.post(
    "",
    status_code=status.HTTP_201_CREATED
)
def create_department_route(
    name: str,
    db: Session = Depends(get_db)
):

    result = create_department(
        db,
        name
    )

    if result == "department_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department could not be created because of a database constraint"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# READ - GET ALL
# ==================================================

@router.get("")
def get_departments(
    db: Session = Depends(get_db)
):

    result = get_all_departments(db)

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# READ - GET BY ID
# ==================================================

@router.get("/{department_id}")
def get_department(
    department_id: int,
    db: Session = Depends(get_db)
):

    result = get_department_by_id(
        db,
        department_id
    )

    if result == "department_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Department not found"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# PUT
# ==================================================

@router.put("/{department_id}")
def put_department(
    department_id: int,
    name: str,
    db: Session = Depends(get_db)
):

    result = update_department(
        db,
        department_id,
        name
    )

    if result == "department_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Department not found"
        )

    if result == "department_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department with this name already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department could not be updated because of a database constraint"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# PATCH
# ==================================================

@router.patch("/{department_id}")
def patch_department_route(
    department_id: int,
    name: str | None = None,
    db: Session = Depends(get_db)
):

    result = patch_department(
        db,
        department_id,
        name
    )

    if result == "department_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Department not found"
        )

    if result == "department_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department with this name already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department could not be updated because of a database constraint"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# DELETE
# ==================================================

@router.delete("/{department_id}")
def delete_department_route(
    department_id: int,
    db: Session = Depends(get_db)
):

    result = delete_department(
        db,
        department_id
    )

    if result == "department_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Department not found"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Department cannot be deleted because employees are associated with it"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return {
        "message": "Department deleted successfully",
        "department": result
    }
    
@router.get("/{department_id}/employees")
def get_department_employees(
    department_id: int,
    db: Session = Depends(get_db)
):

    department = (
        db.query(Department)
        .filter(
            Department.id == department_id
        )
        .first()
    )

    if department is None:

        raise HTTPException(
            status_code=404,
            detail="Department not found"
        )

    return department.employees