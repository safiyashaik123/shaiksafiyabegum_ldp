from pydantic import BaseModel, ConfigDict


class DoctorCreate(BaseModel):
    doctor_code: str
    name: str
    specialization: str
    license_number: str


class DoctorResponse(BaseModel):
    id: int
    doctor_code: str
    name: str
    specialization: str
    license_number: str

    model_config = ConfigDict(
        from_attributes=True
    )