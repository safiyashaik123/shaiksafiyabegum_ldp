from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from app.models.department_model import Department
from app.models.employee_model import Employee
from app.models.employee_model import Employee
from app.models.project_model import Project

# --------------------------------------------------
# CREATE
# --------------------------------------------------

def create_employee(
    db: Session,
    name: str,
    age: int,
    salary: float,
    email: str
):

    try:

        # Check duplicate email before inserting
        existing_employee = (
            db.query(Employee)
            .filter(Employee.email == email)
            .first()
        )

        if existing_employee is not None:
            return "duplicate_email"

        employee = Employee(
            name=name,
            age=age,
            salary=salary,
            email=email
        )

        db.add(employee)

        db.commit()

        db.refresh(employee)

        return employee

    except IntegrityError:

        db.rollback()

        return "duplicate_email"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# --------------------------------------------------
# READ - Get all employees
# --------------------------------------------------

def get_all_employees(
    db: Session
):

    try:

        employees = (
            db.query(Employee)
            .all()
        )

        return employees

    except SQLAlchemyError:

        return "database_error"


# --------------------------------------------------
# READ - Get employee by ID
# --------------------------------------------------

def get_employee_by_id(
    db: Session,
    employee_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        return employee

    except SQLAlchemyError:

        return "database_error"


# --------------------------------------------------
# UPDATE - PUT
# --------------------------------------------------

def replace_employee(
    db: Session,
    employee_id: int,
    name: str,
    age: int,
    salary: float,
    email: str
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return None

        # Check whether email belongs to another employee
        existing_employee = (
            db.query(Employee)
            .filter(
                Employee.email == email,
                Employee.id != employee_id
            )
            .first()
        )

        if existing_employee is not None:
            return "duplicate_email"

        employee.name = name
        employee.age = age
        employee.salary = salary
        employee.email = email

        db.commit()

        db.refresh(employee)

        return employee

    except IntegrityError:

        db.rollback()

        return "duplicate_email"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# --------------------------------------------------
# UPDATE - PATCH
# --------------------------------------------------

def patch_employee(
    db: Session,
    employee_id: int,
    name: str | None = None,
    age: int | None = None,
    salary: float | None = None,
    email: str | None = None
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return None

        # Check duplicate email only when email is being changed
        if email is not None:

            existing_employee = (
                db.query(Employee)
                .filter(
                    Employee.email == email,
                    Employee.id != employee_id
                )
                .first()
            )

            if existing_employee is not None:
                return "duplicate_email"

        if name is not None:
            employee.name = name

        if age is not None:
            employee.age = age

        if salary is not None:
            employee.salary = salary

        if email is not None:
            employee.email = email

        db.commit()

        db.refresh(employee)

        return employee

    except IntegrityError:

        db.rollback()

        return "duplicate_email"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# --------------------------------------------------
# DELETE
# --------------------------------------------------

def delete_employee(
    db: Session,
    employee_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return None

        db.delete(employee)

        db.commit()

        return employee

    except SQLAlchemyError:

        db.rollback()

        return "database_error"
    
    
    
def assign_employee_to_department(
    db: Session,
    employee_id: int,
    department_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(Employee.id == employee_id)
            .first()
        )

        if employee is None:
            return "employee_not_found"

        department = (
            db.query(Department)
            .filter(Department.id == department_id)
            .first()
        )

        if department is None:
            return "department_not_found"

        employee.department_id = department_id

        db.commit()
        db.refresh(employee)

        return employee

    except IntegrityError:

        db.rollback()
        return "integrity_error"

    except SQLAlchemyError:

        db.rollback()
        return "database_error"  
    

def get_employee_department(
    db: Session,
    employee_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return "employee_not_found"

        if employee.department is None:
            return "department_not_found"

        return employee.department

    except SQLAlchemyError:

        return "database_error"
    
    
# ==================================================
# MANY-TO-MANY
# Assign Employee to Project
# ==================================================

def assign_employee_to_project(
    db: Session,
    employee_id: int,
    project_id: int
):

    try:

        # ------------------------------------------
        # Check Employee
        # ------------------------------------------

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return "employee_not_found"


        # ------------------------------------------
        # Check Project
        # ------------------------------------------

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"


        # ------------------------------------------
        # Check existing relationship
        # ------------------------------------------

        if project in employee.projects:
            return "already_assigned"


        # ------------------------------------------
        # Create relationship
        # ------------------------------------------

        employee.projects.append(project)

        db.commit()

        db.refresh(employee)

        return project


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"
    
# ==================================================
# GET PROJECTS FOR EMPLOYEE
# ==================================================

def get_employee_projects(
    db: Session,
    employee_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return "employee_not_found"

        return employee.projects

    except SQLAlchemyError:

        return "database_error"
    
def remove_employee_from_project(
    db: Session,
    employee_id: int,
    project_id: int
):

    try:

        employee = (
            db.query(Employee)
            .filter(
                Employee.id == employee_id
            )
            .first()
        )

        if employee is None:
            return "employee_not_found"

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        if project not in employee.projects:
            return "relationship_not_found"

        employee.projects.remove(project)

        db.commit()

        return "relationship_removed"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"
    

