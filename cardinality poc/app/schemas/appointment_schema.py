from pydantic import BaseModel, ConfigDict


class AppointmentCreate(BaseModel):
    appointment_number: str
    appointment_date: str
    reason: str
    doctor_id: int
    status: str = "SCHEDULED"


class AppointmentResponse(BaseModel):
    id: int
    appointment_number: str
    appointment_date: str
    reason: str
    doctor_id: int
    status: str

    model_config = ConfigDict(
        from_attributes=True
    )