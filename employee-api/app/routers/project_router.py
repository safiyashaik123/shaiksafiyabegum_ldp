from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.project_db_service import (
    create_project,
    get_all_projects,
    get_project_by_id,
    update_project,
    patch_project,
    delete_project,
    get_project_employees
)


router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


# ==================================================
# CREATE
# ==================================================

@router.post(
    "",
    status_code=status.HTTP_201_CREATED
)
def create_project_route(
    name: str,
    db: Session = Depends(get_db)
):

    result = create_project(
        db,
        name
    )

    if result == "project_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project could not be created because of a database constraint"
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
def get_projects(
    db: Session = Depends(get_db)
):

    result = get_all_projects(db)

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return result


# ==================================================
# READ - GET BY ID
# ==================================================

@router.get("/{project_id}")
def get_project(
    project_id: int,
    db: Session = Depends(get_db)
):

    result = get_project_by_id(
        db,
        project_id
    )

    if result == "project_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
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

@router.put("/{project_id}")
def put_project(
    project_id: int,
    name: str,
    db: Session = Depends(get_db)
):

    result = update_project(
        db,
        project_id,
        name
    )

    if result == "project_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )

    if result == "project_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project with this name already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project could not be updated because of a database constraint"
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

@router.patch("/{project_id}")
def patch_project_route(
    project_id: int,
    name: str | None = None,
    db: Session = Depends(get_db)
):

    result = patch_project(
        db,
        project_id,
        name
    )

    if result == "project_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )

    if result == "project_already_exists":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project with this name already exists"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project could not be updated because of a database constraint"
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

@router.delete("/{project_id}")
def delete_project_route(
    project_id: int,
    db: Session = Depends(get_db)
):

    result = delete_project(
        db,
        project_id
    )

    if result == "project_not_found":

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Project cannot be deleted because it is associated with employees"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred"
        )

    return {
        "message": "Project deleted successfully",
        "project": result
    }
    
    
# ==================================================
# GET EMPLOYEES FOR PROJECT
# ==================================================

@router.get("/{project_id}/employees")
def get_employees_for_project(
    project_id: int,
    db: Session = Depends(get_db)
):

    result = get_project_employees(
        db,
        project_id
    )

    if result == "project_not_found":

        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )

    return result