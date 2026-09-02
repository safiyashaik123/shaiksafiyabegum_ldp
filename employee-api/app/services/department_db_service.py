from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

from app.models.department_model import Department


# ==================================================
# CREATE
# ==================================================

def create_department(
    db: Session,
    name: str
):

    try:

        # ------------------------------------------
        # Check duplicate department name
        # ------------------------------------------

        existing_department = (
            db.query(Department)
            .filter(
                Department.name == name
            )
            .first()
        )

        if existing_department is not None:
            return "department_already_exists"


        # ------------------------------------------
        # Create department
        # ------------------------------------------

        department = Department(
            name=name
        )

        db.add(department)

        db.commit()

        db.refresh(department)

        return department


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# READ - GET ALL
# ==================================================

def get_all_departments(
    db: Session
):

    try:

        departments = (
            db.query(Department)
            .all()
        )

        return departments


    except SQLAlchemyError:

        return "database_error"


# ==================================================
# READ - GET BY ID
# ==================================================

def get_department_by_id(
    db: Session,
    department_id: int
):

    try:

        department = (
            db.query(Department)
            .filter(
                Department.id == department_id
            )
            .first()
        )

        if department is None:
            return "department_not_found"

        return department


    except SQLAlchemyError:

        return "database_error"


# ==================================================
# UPDATE - PUT
# ==================================================

def update_department(
    db: Session,
    department_id: int,
    name: str
):

    try:

        department = (
            db.query(Department)
            .filter(
                Department.id == department_id
            )
            .first()
        )

        if department is None:
            return "department_not_found"


        # ------------------------------------------
        # Check duplicate name
        # ------------------------------------------

        existing_department = (
            db.query(Department)
            .filter(
                Department.name == name,
                Department.id != department_id
            )
            .first()
        )

        if existing_department is not None:
            return "department_already_exists"


        department.name = name

        db.commit()

        db.refresh(department)

        return department


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# UPDATE - PATCH
# ==================================================

def patch_department(
    db: Session,
    department_id: int,
    name: str | None = None
):

    try:

        department = (
            db.query(Department)
            .filter(
                Department.id == department_id
            )
            .first()
        )

        if department is None:
            return "department_not_found"


        if name is not None:

            existing_department = (
                db.query(Department)
                .filter(
                    Department.name == name,
                    Department.id != department_id
                )
                .first()
            )

            if existing_department is not None:
                return "department_already_exists"


            department.name = name


        db.commit()

        db.refresh(department)

        return department


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# DELETE
# ==================================================

def delete_department(
    db: Session,
    department_id: int
):

    try:

        department = (
            db.query(Department)
            .filter(
                Department.id == department_id
            )
            .first()
        )

        if department is None:
            return "department_not_found"


        db.delete(department)

        db.commit()

        return department


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"