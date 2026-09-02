from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.doctor_schema import (
    DoctorCreate,
    DoctorResponse
)

from app.schemas.doctor_patient_schema import (
    DoctorPatientCreate
)

from app.services.doctor_service import (
    create_doctor,
    get_all_doctors,
    get_doctor,
    assign_patient_to_doctor,
    get_doctor_patients,
    get_patient_doctors,
    get_all_doctor_patient_relationships,
    delete_doctor,
    delete_doctor_patient_relationship
)


router = APIRouter(
    prefix="/doctors",
    tags=["Doctors"]
)


# --------------------------------------------------
# DOCTOR
# --------------------------------------------------

@router.post(
    "",
    response_model=DoctorResponse
)
def create(
    data: DoctorCreate,
    db: Session = Depends(get_db)
):
    return create_doctor(
        db,
        data
    )


@router.get(
    "",
    response_model=list[DoctorResponse]
)
def get_all(
    db: Session = Depends(get_db)
):
    return get_all_doctors(db)


# --------------------------------------------------
# M:M - DOCTOR PATIENT
# --------------------------------------------------

# Get complete doctor_patient association table
@router.get("/relationships")
def get_all_relationships(
    db: Session = Depends(get_db)
):
    return get_all_doctor_patient_relationships(db)


# Create Doctor ↔ Patient relationship
@router.post("/patients")
def assign_patient(
    data: DoctorPatientCreate,
    db: Session = Depends(get_db)
):
    return assign_patient_to_doctor(
        db,
        data.doctor_id,
        data.patient_id
    )


# Get patients belonging to a doctor
@router.get("/{doctor_id}/patients")
def get_patients(
    doctor_id: int,
    db: Session = Depends(get_db)
):
    return get_doctor_patients(
        db,
        doctor_id
    )


# Get doctors belonging to a patient
@router.get("/patients/{patient_id}")
def get_doctors(
    patient_id: int,
    db: Session = Depends(get_db)
):
    return get_patient_doctors(
        db,
        patient_id
    )


# Delete only Doctor ↔ Patient relationship
@router.delete(
    "/{doctor_id}/patients/{patient_id}"
)
def delete_patient_relationship(
    doctor_id: int,
    patient_id: int,
    db: Session = Depends(get_db)
):
    return delete_doctor_patient_relationship(
        db,
        doctor_id,
        patient_id
    )


# --------------------------------------------------
# SINGLE DOCTOR
# --------------------------------------------------

# Keep this LAST among the GET routes
@router.get(
    "/{doctor_id}",
    response_model=DoctorResponse
)
def get_one(
    doctor_id: int,
    db: Session = Depends(get_db)
):
    return get_doctor(
        db,
        doctor_id
    )


# --------------------------------------------------
# DELETE DOCTOR
# --------------------------------------------------

@router.delete("/{doctor_id}")
def delete(
    doctor_id: int,
    db: Session = Depends(get_db)
):
    return delete_doctor(
        db,
        doctor_id
    )