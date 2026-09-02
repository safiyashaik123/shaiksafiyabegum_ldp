from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.doctor import Doctor
from app.models.patient import Patient
from app.models.doctor_patient import DoctorPatient

from app.schemas.doctor_schema import DoctorCreate


def create_doctor(
    db: Session,
    data: DoctorCreate
):
    # Check whether doctor already exists
    existing_doctor = (
        db.query(Doctor)
        .filter(
            (Doctor.doctor_code == data.doctor_code)
            |
            (Doctor.license_number == data.license_number)
        )
        .first()
    )

    if existing_doctor:

        if existing_doctor.doctor_code == data.doctor_code:
            raise HTTPException(
                status_code=409,
                detail="Doctor with this doctor code already exists"
            )

        if existing_doctor.license_number == data.license_number:
            raise HTTPException(
                status_code=409,
                detail="Doctor with this license number already exists"
            )

    doctor = Doctor(
        **data.model_dump()
    )

    db.add(doctor)
    db.commit()
    db.refresh(doctor)

    return doctor


def get_all_doctors(db: Session):
    return db.query(Doctor).all()


def get_doctor(
    db: Session,
    doctor_id: int
):
    doctor = db.get(
        Doctor,
        doctor_id
    )

    if not doctor:
        raise HTTPException(
            status_code=404,
            detail="Doctor not found"
        )

    return doctor


def assign_patient_to_doctor(
    db: Session,
    doctor_id: int,
    patient_id: int
):
    # Check Doctor
    get_doctor(
        db,
        doctor_id
    )

    # Check Patient
    patient = db.get(
        Patient,
        patient_id
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    # Check existing relationship
    existing = (
        db.query(DoctorPatient)
        .filter(
            DoctorPatient.doctor_id == doctor_id,
            DoctorPatient.patient_id == patient_id
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail=(
                "Doctor-patient relationship "
                "already exists"
            )
        )

    mapping = DoctorPatient(
        doctor_id=doctor_id,
        patient_id=patient_id
    )

    db.add(mapping)

    try:
        db.commit()
    except Exception:
        db.rollback()

        raise HTTPException(
            status_code=409,
            detail=(
                "Doctor-patient relationship "
                "already exists"
            )
        )

    return {
        "message": "Doctor-patient relationship created",
        "doctor_id": doctor_id,
        "patient_id": patient_id
    }

def get_doctor_patients(
    db: Session,
    doctor_id: int
):
    doctor = get_doctor(
        db,
        doctor_id
    )

    return doctor.patients


def get_patient_doctors(
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

    return patient.doctors


def delete_doctor(
    db: Session,
    doctor_id: int
):
    doctor = get_doctor(
        db,
        doctor_id
    )

    appointment_count = len(
        doctor.appointments
    )

    # Count M:M relationships
    mapping_count = (
        db.query(DoctorPatient)
        .filter(
            DoctorPatient.doctor_id == doctor_id
        )
        .count()
    )

    # Delete M:M association records
    db.query(DoctorPatient).filter(
        DoctorPatient.doctor_id == doctor_id
    ).delete(
        synchronize_session=False
    )

    # Delete Doctor
    #
    # Because Doctor.appointments has:
    # cascade="all, delete-orphan"
    #
    # all related appointments will also be deleted.
    db.delete(doctor)

    db.commit()

    return {
        "message": "Doctor deleted successfully",
        "appointments_deleted": appointment_count,
        "doctor_patient_mappings_deleted": mapping_count,
        "patients_preserved": True
    }
    

def delete_doctor_patient_relationship(
    db: Session,
    doctor_id: int,
    patient_id: int
):
    # Check doctor exists
    get_doctor(
        db,
        doctor_id
    )

    # Check patient exists
    patient = db.get(
        Patient,
        patient_id
    )

    if not patient:
        raise HTTPException(
            status_code=404,
            detail="Patient not found"
        )

    # Find relationship
    mapping = (
        db.query(DoctorPatient)
        .filter(
            DoctorPatient.doctor_id == doctor_id,
            DoctorPatient.patient_id == patient_id
        )
        .first()
    )

    if not mapping:
        raise HTTPException(
            status_code=404,
            detail=(
                "Doctor-patient relationship "
                "not found"
            )
        )

    db.delete(mapping)
    db.commit()

    return {
        "message": (
            "Doctor-patient relationship "
            "deleted successfully"
        ),
        "doctor_id": doctor_id,
        "patient_id": patient_id,
        "doctor_preserved": True,
        "patient_preserved": True
    }
    
    
def get_all_doctor_patient_relationships(
    db: Session
):
    return db.query(DoctorPatient).all()