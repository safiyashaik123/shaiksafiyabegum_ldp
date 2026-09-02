from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError, SQLAlchemyError

from app.models.project_model import Project


# ==================================================
# CREATE
# ==================================================

def create_project(
    db: Session,
    name: str
):

    try:

        existing_project = (
            db.query(Project)
            .filter(
                Project.name == name
            )
            .first()
        )

        if existing_project is not None:
            return "project_already_exists"

        project = Project(
            name=name
        )

        db.add(project)

        db.commit()

        db.refresh(project)

        return project

    except IntegrityError:

        db.rollback()

        return "integrity_error"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# READ - GET ALL
# ==================================================

def get_all_projects(
    db: Session
):

    try:

        projects = (
            db.query(Project)
            .all()
        )

        return projects

    except SQLAlchemyError:

        return "database_error"


# ==================================================
# READ - GET BY ID
# ==================================================

def get_project_by_id(
    db: Session,
    project_id: int
):

    try:

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        return project

    except SQLAlchemyError:

        return "database_error"


# ==================================================
# UPDATE - PUT
# ==================================================

def update_project(
    db: Session,
    project_id: int,
    name: str
):

    try:

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        existing_project = (
            db.query(Project)
            .filter(
                Project.name == name,
                Project.id != project_id
            )
            .first()
        )

        if existing_project is not None:
            return "project_already_exists"

        project.name = name

        db.commit()

        db.refresh(project)

        return project

    except IntegrityError:

        db.rollback()

        return "integrity_error"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# UPDATE - PATCH
# ==================================================

def patch_project(
    db: Session,
    project_id: int,
    name: str | None = None
):

    try:

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        if name is not None:

            existing_project = (
                db.query(Project)
                .filter(
                    Project.name == name,
                    Project.id != project_id
                )
                .first()
            )

            if existing_project is not None:
                return "project_already_exists"

            project.name = name

        db.commit()

        db.refresh(project)

        return project

    except IntegrityError:

        db.rollback()

        return "integrity_error"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"


# ==================================================
# DELETE
# ==================================================

def delete_project(
    db: Session,
    project_id: int
):

    try:

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        db.delete(project)

        db.commit()

        return project

    except IntegrityError:

        db.rollback()

        return "integrity_error"

    except SQLAlchemyError:

        db.rollback()

        return "database_error"
    
# ==================================================
# GET EMPLOYEES FOR PROJECT
# ==================================================

def get_project_employees(
    db: Session,
    project_id: int
):

    try:

        project = (
            db.query(Project)
            .filter(
                Project.id == project_id
            )
            .first()
        )

        if project is None:
            return "project_not_found"

        return project.employees

    except SQLAlchemyError:

        return "database_error"