from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.patient import Patient
from app.models.national_health_id import NationalHealthID
from app.models.doctor_patient import DoctorPatient

from app.schemas.patient_schema import PatientCreate
from app.schemas.national_health_id_schema import (
    NationalHealthIDCreate
)


def create_patient(
    db: Session,
    data: PatientCreate
):
    existing = (
        db.query(Patient)
        .filter(
            Patient.patient_number
            == data.patient_number
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail="Patient number already exists"
        )

    patient = Patient(
        **data.model_dump()
    )

    db.add(patient)
    db.commit()
    db.refresh(patient)

    return patient


def get_all_patients(db: Session):
    return db.query(Patient).all()


def get_patient(
    db: Session,
    patient_id: int
):
    patient = db.get(
        Patient,
        patient_id
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    return patient


def create_health_id(
    db: Session,
    data: NationalHealthIDCreate
):
    patient = db.get(
        Patient,
        data.patient_id
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    if patient.health_id:
        raise HTTPException(
            status_code=409,
            detail="Patient already has a National Health ID"
        )

    existing_health_id = (
        db.query(NationalHealthID)
        .filter(
            NationalHealthID.health_id
            == data.health_id
        )
        .first()
    )

    if existing_health_id:
        raise HTTPException(
            status_code=409,
            detail="National Health ID already exists"
        )

    health_id = NationalHealthID(
        **data.model_dump()
    )

    db.add(health_id)
    db.commit()
    db.refresh(health_id)

    return health_id

def get_health_id(
    db: Session,
    patient_id: int
):
    health_id = (
        db.query(NationalHealthID)
        .filter(
            NationalHealthID.patient_id
            == patient_id
        )
        .first()
    )

    if not health_id:
        raise HTTPException(
            status_code=404,
            detail="National Health ID not found"
        )

    return health_id


def delete_patient(
    db: Session,
    patient_id: int
):
    patient = get_patient(
        db,
        patient_id
    )

    # Remove M:M association rows first.
    db.query(DoctorPatient).filter(
        DoctorPatient.patient_id == patient_id
    ).delete(
        synchronize_session=False
    )

    # Patient → NationalHealthID
    # cascade="all, delete-orphan"
    # automatically deletes the health ID.
    db.delete(patient)

    db.commit()

    return {
        "message": (
            "Patient deleted. "
            "NationalHealthID deleted. "
            "DoctorPatient mappings deleted."
        )
    }
    
def delete_health_id(
    db: Session,
    health_id_id: int
):
    health_id = db.get(
        NationalHealthID,
        health_id_id
    )

    if not health_id:
        raise HTTPException(
            status_code=404,
            detail="National Health ID not found"
        )

    patient_id = health_id.patient_id

    db.delete(health_id)
    db.commit()

    return {
        "message": "National Health ID deleted successfully",
        "health_id_id": health_id_id,
        "patient_id": patient_id,
        "patient_preserved": True
    }
    
def get_all_health_ids(db: Session):
    return db.query(NationalHealthID).all()



def delete_all_patients(db: Session):
    patients = db.query(Patient).all()

    if not patients:
        raise HTTPException(
            status_code=404,
            detail="No patients found"
        )

    patient_count = len(patients)

    health_id_count = (
        db.query(NationalHealthID)
        .filter(
            NationalHealthID.patient_id.isnot(None)
        )
        .count()
    )

    doctor_patient_count = (
        db.query(DoctorPatient)
        .filter(
            DoctorPatient.patient_id.isnot(None)
        )
        .count()
    )

    # Remove M:M association records
    db.query(DoctorPatient).delete(
        synchronize_session=False
    )

    # Delete Patients.
    # Because Patient → NationalHealthID
    # has cascade="all, delete-orphan",
    # their Health IDs will also be deleted.
    for patient in patients:
        db.delete(patient)

    db.commit()

    return {
        "message": "All patients deleted successfully",
        "patients_deleted": patient_count,
        "health_ids_deleted": health_id_count,
        "doctor_patient_mappings_deleted": doctor_patient_count,
        "doctors_preserved": True
    }