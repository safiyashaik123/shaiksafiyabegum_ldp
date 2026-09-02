from pydantic import BaseModel, ConfigDict


class NationalHealthIDCreate(BaseModel):
    health_id: str
    patient_id: int
    issued_date: str
    status: str = "ACTIVE"


class NationalHealthIDResponse(BaseModel):
    id: int
    health_id: str
    patient_id: int
    issued_date: str
    status: str

    model_config = ConfigDict(
        from_attributes=True
    )