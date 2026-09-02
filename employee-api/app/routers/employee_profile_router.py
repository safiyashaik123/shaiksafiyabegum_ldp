from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.employee_profile_db_service import (
    create_employee_profile,
    get_all_employee_profiles,
    get_employee_profile_by_id,
    get_profile_by_employee_id,
    update_employee_profile,
    delete_employee_profile
)


router = APIRouter(
    prefix="/employee-profiles",
    tags=["Employee Profiles"]
)


# ==================================================
# CREATE
# ==================================================

@router.post(
    "",
    status_code=status.HTTP_201_CREATED
)
def create_profile(
    employee_id: int,
    phone: str,
    address: str,
    db: Session = Depends(get_db)
):

    result = create_employee_profile(
        db,
        employee_id,
        phone,
        address
    )


    if result == "employee_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee not found"
        )


    if result == "profile_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Employee already has a profile"
        )


    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Profile could not be created because of a database constraint"
        )


    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )


    return result


# ==================================================
# READ - GET ALL PROFILES
# ==================================================

@router.get("")
def get_all_profiles(
    db: Session = Depends(get_db)
):

    result = get_all_employee_profiles(db)


    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )


    return result


# ==================================================
# READ - GET PROFILE BY PROFILE ID
# ==================================================

@router.get("/{profile_id}")
def get_profile_by_id(
    profile_id: int,
    db: Session = Depends(get_db)
):

    result = get_employee_profile_by_id(
        db,
        profile_id
    )


    if result == "profile_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee profile not found"
        )


    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )


    return result


# ==================================================
# READ - GET PROFILE USING EMPLOYEE ID
# ==================================================

@router.get("/{employee_id}/profile")
def get_employee_profile(
    employee_id: int,
    db: Session = Depends(get_db)
):

    result = get_profile_by_employee_id(
        db,
        employee_id
    )


    if result == "employee_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee not found"
        )


    if result == "profile_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee profile not found"
        )


    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )


    return result


# ==================================================
# UPDATE
# ==================================================

@router.put("/{profile_id}")
def update_profile(
    profile_id: int,
    phone: str,
    address: str,
    db: Session = Depends(get_db)
):

    result = update_employee_profile(
        db,
        profile_id,
        phone,
        address
    )


    if result == "profile_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee profile not found"
        )


    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Profile could not be updated because of a database constraint"
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

@router.delete("/{profile_id}")
def delete_profile(
    profile_id: int,
    db: Session = Depends(get_db)
):

    result = delete_employee_profile(
        db,
        profile_id
    )


    if result == "profile_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Employee profile not found"
        )


    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )


    return {
        "message": "Employee profile deleted successfully",
        "profile": result
    }
    
    
