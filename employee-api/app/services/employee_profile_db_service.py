from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

from app.models.employee_model import Employee
from app.models.employee_profile_model import EmployeeProfile


# ==================================================
# CREATE
# ==================================================

def create_employee_profile(
    db: Session,
    employee_id: int,
    phone: str,
    address: str
):

    try:

        # ------------------------------------------
        # Check employee exists
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
        # Check employee already has profile
        # ------------------------------------------

        existing_profile = (
            db.query(EmployeeProfile)
            .filter(
                EmployeeProfile.employee_id == employee_id
            )
            .first()
        )

        if existing_profile is not None:
            return "profile_already_exists"


        # ------------------------------------------
        # Create profile
        # ------------------------------------------

        profile = EmployeeProfile(
            employee_id=employee_id,
            phone=phone,
            address=address
        )

        db.add(profile)

        db.commit()

        db.refresh(profile)

        return profile


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# READ - GET ALL PROFILES
# ==================================================

def get_all_employee_profiles(
    db: Session
):

    try:

        profiles = (
            db.query(EmployeeProfile)
            .all()
        )

        return profiles


    except SQLAlchemyError:

        return "database_error"


# ==================================================
# READ - GET PROFILE BY PROFILE ID
# ==================================================

def get_employee_profile_by_id(
    db: Session,
    profile_id: int
):

    try:

        profile = (
            db.query(EmployeeProfile)
            .filter(
                EmployeeProfile.id == profile_id
            )
            .first()
        )

        if profile is None:
            return "profile_not_found"

        return profile


    except SQLAlchemyError:

        return "database_error"


# ==================================================
# READ - GET PROFILE BY EMPLOYEE ID
# ==================================================

def get_profile_by_employee_id(
    db: Session,
    employee_id: int
):

    try:

        # ------------------------------------------
        # Find employee
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
        # Access One-to-One relationship
        # ------------------------------------------

        profile = employee.profile


        # ------------------------------------------
        # Employee exists but profile doesn't exist
        # ------------------------------------------

        if profile is None:
            return "profile_not_found"


        return profile


    except SQLAlchemyError:

        return "database_error"


# ==================================================
# UPDATE
# ==================================================

def update_employee_profile(
    db: Session,
    profile_id: int,
    phone: str,
    address: str
):

    try:

        profile = (
            db.query(EmployeeProfile)
            .filter(
                EmployeeProfile.id == profile_id
            )
            .first()
        )

        if profile is None:
            return "profile_not_found"


        profile.phone = phone
        profile.address = address


        db.commit()

        db.refresh(profile)

        return profile


    except IntegrityError:

        db.rollback()

        return "integrity_error"


    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# DELETE
# ==================================================

def delete_employee_profile(
    db: Session,
    profile_id: int
):

    try:

        profile = (
            db.query(EmployeeProfile)
            .filter(
                EmployeeProfile.id == profile_id
            )
            .first()
        )

        if profile is None:
            return "profile_not_found"


        db.delete(profile)

        db.commit()

        return profile


    except SQLAlchemyError:

        db.rollback()

        return "database_error"