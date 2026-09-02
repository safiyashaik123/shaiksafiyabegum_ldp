from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.appointment_schema import (
    AppointmentCreate,
    AppointmentResponse
)

from app.services.appointment_service import (
    create_appointment,
    get_appointment,
    get_doctor_appointments,
    delete_appointment,
    get_all_appointments
)


router = APIRouter(
    prefix="/appointments",
    tags=["Appointments"]
)


@router.post(
    "",
    response_model=AppointmentResponse
)
def create(
    data: AppointmentCreate,
    db: Session = Depends(get_db)
):
    return create_appointment(
        db,
        data
    )

@router.get(
    "",
    response_model=list[AppointmentResponse]
)
def get_all(
    db: Session = Depends(get_db)
):
    return get_all_appointments(db)

@router.get(
    "/{appointment_id}",
    response_model=AppointmentResponse
)
def get_one(
    appointment_id: int,
    db: Session = Depends(get_db)
):
    return get_appointment(
        db,
        appointment_id
    )


@router.get(
    "/doctor/{doctor_id}",
    response_model=list[AppointmentResponse]
)
def get_doctor_appointments_route(
    doctor_id: int,
    db: Session = Depends(get_db)
):
    return get_doctor_appointments(
        db,
        doctor_id
    )


@router.delete("/{appointment_id}")
def delete(
    appointment_id: int,
    db: Session = Depends(get_db)
):
    return delete_appointment(
        db,
        appointment_id
    )