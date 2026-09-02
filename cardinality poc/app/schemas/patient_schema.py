from pydantic import BaseModel, ConfigDict


class PatientCreate(BaseModel):
    patient_number: str
    name: str
    date_of_birth: str
    phone: str


class PatientResponse(BaseModel):
    id: int
    patient_number: str
    name: str
    date_of_birth: str
    phone: str

    model_config = ConfigDict(
        from_attributes=True
    )