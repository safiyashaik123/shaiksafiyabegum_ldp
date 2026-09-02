# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# from app.database.database import get_db

# from app.services.employee_db_service import (
#     create_employee,
#     get_all_employees,
#     get_employee_by_id,
#     replace_employee,
#     patch_employee,
#     delete_employee
# )


# router = APIRouter(
#     prefix="/db/employees",
#     tags=["Database CRUD"]
# )


# # --------------------------------------------------
# # CREATE
# # --------------------------------------------------

# @router.post("")
# def create_db_employee(
#     name: str,
#     age: int,
#     salary: float,
#     email: str,
#     db: Session = Depends(get_db)
# ):

#     return create_employee(
#         db,
#         name,
#         age,
#         salary,
#         email
#     )


# # --------------------------------------------------
# # READ - Get all employees
# # --------------------------------------------------

# @router.get("")
# def get_db_employees(
#     db: Session = Depends(get_db)
# ):

#     return get_all_employees(db)


# # --------------------------------------------------
# # READ - Get employee by ID
# # --------------------------------------------------

# @router.get("/{employee_id}")
# def get_db_employee(
#     employee_id: int,
#     db: Session = Depends(get_db)
# ):

#     employee = get_employee_by_id(
#         db,
#         employee_id
#     )

#     if employee is None:

#         raise HTTPException(
#             status_code=404,
#             detail="Employee not found"
#         )

#     return employee


# # --------------------------------------------------
# # UPDATE - PUT
# # --------------------------------------------------

# @router.put("/{employee_id}")
# def replace_db_employee(
#     employee_id: int,
#     name: str,
#     age: int,
#     salary: float,
#     email: str,
#     db: Session = Depends(get_db)
# ):

#     employee = replace_employee(
#         db,
#         employee_id,
#         name,
#         age,
#         salary,
#         email
#     )

#     if employee is None:

#         raise HTTPException(
#             status_code=404,
#             detail="Employee not found"
#         )

#     return employee


# # --------------------------------------------------
# # UPDATE - PATCH
# # --------------------------------------------------

# @router.patch("/{employee_id}")
# def patch_db_employee(
#     employee_id: int,
#     name: str | None = None,
#     age: int | None = None,
#     salary: float | None = None,
#     email: str | None = None,
#     db: Session = Depends(get_db)
# ):

#     employee = patch_employee(
#         db,
#         employee_id,
#         name,
#         age,
#         salary,
#         email
#     )

#     if employee is None:

#         raise HTTPException(
#             status_code=404,
#             detail="Employee not found"
#         )

#     return employee


# # --------------------------------------------------
# # DELETE
# # --------------------------------------------------

# @router.delete("/{employee_id}")
# def delete_db_employee(
#     employee_id: int,
#     db: Session = Depends(get_db)
# ):

#     employee = delete_employee(
#         db,
#         employee_id
#     )

#     if employee is None:

#         raise HTTPException(
#             status_code=404,
#             detail="Employee not found"
#         )

#     return {
#         "message": "Employee deleted successfully",
#         "employee_id": employee_id
#     }

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.employee_db_service import (
    create_employee,
    get_all_employees,
    get_employee_by_id,
    replace_employee,
    patch_employee,
    delete_employee,
    assign_employee_to_department,
    get_employee_department,
    assign_employee_to_project,
    get_employee_projects,
    remove_employee_from_project
)


router = APIRouter(
    prefix="/db/employees",
    tags=["Database CRUD"]
)


# --------------------------------------------------
# CREATE
# --------------------------------------------------

@router.post("")
def create_db_employee(
    name: str,
    age: int,
    salary: float,
    email: str,
    db: Session = Depends(get_db)
):

    result = create_employee(
        db,
        name,
        age,
        salary,
        email
    )

    if result == "duplicate_email":

        raise HTTPException(
            status_code=409,
            detail={
                "error": "Duplicate Email",
                "message": (
                    f"Employee with email "
                    f"'{email}' already exists."
                )
            }
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to create employee "
                    "because of a database problem."
                )
            }
        )

    return result


# --------------------------------------------------
# READ - Get all employees
# --------------------------------------------------

@router.get("")
def get_db_employees(
    db: Session = Depends(get_db)
):

    result = get_all_employees(db)

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to retrieve employees "
                    "because of a database problem."
                )
            }
        )

    if not result:

        raise HTTPException(
            status_code=404,
            detail={
                "error": "No Employees Found",
                "message": (
                    "There are no employees "
                    "available in the database."
                )
            }
        )

    return result


# --------------------------------------------------
# READ - Get employee by ID
# --------------------------------------------------

@router.get("/{employee_id}")
def get_db_employee(
    employee_id: int,
    db: Session = Depends(get_db)
):

    if employee_id <= 0:

        raise HTTPException(
            status_code=400,
            detail={
                "error": "Invalid Employee ID",
                "message": (
                    "Employee ID must be greater than 0."
                )
            }
        )

    result = get_employee_by_id(
        db,
        employee_id
    )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to retrieve employee "
                    "because of a database problem."
                )
            }
        )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail={
                "error": "Employee Not Found",
                "message": (
                    f"No employee exists with "
                    f"ID {employee_id}."
                )
            }
        )

    return result


# --------------------------------------------------
# UPDATE - PUT
# --------------------------------------------------

@router.put("/{employee_id}")
def replace_db_employee(
    employee_id: int,
    name: str,
    age: int,
    salary: float,
    email: str,
    db: Session = Depends(get_db)
):

    if employee_id <= 0:

        raise HTTPException(
            status_code=400,
            detail={
                "error": "Invalid Employee ID",
                "message": (
                    "Employee ID must be greater than 0."
                )
            }
        )

    result = replace_employee(
        db,
        employee_id,
        name,
        age,
        salary,
        email
    )

    if result == "duplicate_email":

        raise HTTPException(
            status_code=409,
            detail={
                "error": "Duplicate Email",
                "message": (
                    f"Email '{email}' is already "
                    "used by another employee."
                )
            }
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to update employee "
                    "because of a database problem."
                )
            }
        )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail={
                "error": "Employee Not Found",
                "message": (
                    f"No employee exists with "
                    f"ID {employee_id}."
                )
            }
        )

    return result


# --------------------------------------------------
# UPDATE - PATCH
# --------------------------------------------------

@router.patch("/{employee_id}")
def patch_db_employee(
    employee_id: int,
    name: str | None = None,
    age: int | None = None,
    salary: float | None = None,
    email: str | None = None,
    db: Session = Depends(get_db)
):

    if employee_id <= 0:

        raise HTTPException(
            status_code=400,
            detail={
                "error": "Invalid Employee ID",
                "message": (
                    "Employee ID must be greater than 0."
                )
            }
        )

    # Make sure at least one field is provided
    if (
        name is None
        and age is None
        and salary is None
        and email is None
    ):

        raise HTTPException(
            status_code=400,
            detail={
                "error": "No Update Data",
                "message": (
                    "Provide at least one field "
                    "to update."
                )
            }
        )

    result = patch_employee(
        db,
        employee_id,
        name,
        age,
        salary,
        email
    )

    if result == "duplicate_email":

        raise HTTPException(
            status_code=409,
            detail={
                "error": "Duplicate Email",
                "message": (
                    f"Email '{email}' is already "
                    "used by another employee."
                )
            }
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to update employee "
                    "because of a database problem."
                )
            }
        )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail={
                "error": "Employee Not Found",
                "message": (
                    f"No employee exists with "
                    f"ID {employee_id}."
                )
            }
        )

    return result


# --------------------------------------------------
# DELETE
# --------------------------------------------------

@router.delete("/{employee_id}")
def delete_db_employee(
    employee_id: int,
    db: Session = Depends(get_db)
):

    if employee_id <= 0:

        raise HTTPException(
            status_code=400,
            detail={
                "error": "Invalid Employee ID",
                "message": (
                    "Employee ID must be greater than 0."
                )
            }
        )

    result = delete_employee(
        db,
        employee_id
    )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail={
                "error": "Database Error",
                "message": (
                    "Unable to delete employee "
                    "because of a database problem."
                )
            }
        )

    if result is None:

        raise HTTPException(
            status_code=404,
            detail={
                "error": "Employee Not Found",
                "message": (
                    f"No employee exists with "
                    f"ID {employee_id}."
                )
            }
        )

    return {
        "message": "Employee deleted successfully",
        "employee_id": employee_id
    }


@router.patch("/{employee_id}/department")
def assign_department(
    employee_id: int,
    department_id: int,
    db: Session = Depends(get_db)
):

    result = assign_employee_to_department(
        db,
        employee_id,
        department_id
    )

    if result == "employee_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    if result == "department_not_found":

        raise HTTPException(
            status_code=404,
            detail="Department not found"
        )

    if result == "integrity_error":

        raise HTTPException(
            status_code=409,
            detail="Unable to assign employee to department"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )

    return result


@router.get("/{employee_id}/department")
def get_employee_department_route(
    employee_id: int,
    db: Session = Depends(get_db)
):

    result = get_employee_department(
        db,
        employee_id
    )

    if result == "employee_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    if result == "department_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee is not assigned to a department"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )

    return result


# ==================================================
# MANY-TO-MANY
# Assign Employee to Project
# ==================================================

@router.post(
    "/{employee_id}/projects/{project_id}"
)
def assign_project_to_employee(
    employee_id: int,
    project_id: int,
    db: Session = Depends(get_db)
):

    result = assign_employee_to_project(
        db,
        employee_id,
        project_id
    )

    if result == "employee_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )


    if result == "project_not_found":

        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )


    if result == "already_assigned":

        raise HTTPException(
            status_code=409,
            detail="Employee is already assigned to this project"
        )


    if result == "integrity_error":

        raise HTTPException(
            status_code=409,
            detail="Employee could not be assigned to project because of a database constraint"
        )


    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )


    return {
        "message": "Employee assigned to project successfully",
        "employee_id": employee_id,
        "project": result
    }
    

# ==================================================
# GET PROJECTS FOR EMPLOYEE
# ==================================================

@router.get("/{employee_id}/projects")
def get_projects_for_employee(
    employee_id: int,
    db: Session = Depends(get_db)
):

    result = get_employee_projects(
        db,
        employee_id
    )

    if result == "employee_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )

    return result


@router.delete(
    "/{employee_id}/projects/{project_id}"
)
def remove_project_from_employee(
    employee_id: int,
    project_id: int,
    db: Session = Depends(get_db)
):

    result = remove_employee_from_project(
        db,
        employee_id,
        project_id
    )

    if result == "employee_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    if result == "project_not_found":

        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    if result == "relationship_not_found":

        raise HTTPException(
            status_code=404,
            detail="Employee is not assigned to this project"
        )

    if result == "database_error":

        raise HTTPException(
            status_code=500,
            detail="Database error occurred"
        )

    return {
        "message": "Employee removed from project successfully",
        "employee_id": employee_id,
        "project_id": project_id
    }