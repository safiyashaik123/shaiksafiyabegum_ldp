from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.appointment import Appointment
from app.models.doctor import Doctor

from app.schemas.appointment_schema import AppointmentCreate


def create_appointment(
    db: Session,
    data: AppointmentCreate
):
    doctor = db.get(
        Doctor,
        data.doctor_id
    )

    if not doctor:
        raise HTTPException(
            status_code=404,
            detail="Doctor not found"
        )

    existing = (
        db.query(Appointment)
        .filter(
            Appointment.appointment_number
            == data.appointment_number
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=409,
            detail=(
                "Appointment with this "
                "appointment number already exists"
            )
        )

    appointment = Appointment(
        **data.model_dump()
    )

    db.add(appointment)
    db.commit()
    db.refresh(appointment)

    return appointment


def get_appointment(
    db: Session,
    appointment_id: int
):
    appointment = db.get(
        Appointment,
        appointment_id
    )

    if not appointment:
        raise HTTPException(
            status_code=404,
            detail="Appointment not found"
        )

    return appointment


def get_doctor_appointments(
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

    return (
        db.query(Appointment)
        .filter(
            Appointment.doctor_id
            == doctor_id
        )
        .all()
    )


def delete_appointment(
    db: Session,
    appointment_id: int
):
    appointment = get_appointment(
        db,
        appointment_id
    )

    db.delete(appointment)
    db.commit()

    return {
        "message": "Appointment deleted successfully"
    }
    
def get_all_appointments(db: Session):
    return db.query(Appointment).all()