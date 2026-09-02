from pydantic import BaseModel


class DoctorPatientCreate(BaseModel):
    doctor_id: int
    patient_id: int