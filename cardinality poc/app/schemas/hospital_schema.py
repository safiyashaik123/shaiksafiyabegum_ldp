from pydantic import BaseModel, ConfigDict


class HospitalCreate(BaseModel):
    hospital_code: str
    name: str
    location: str


class HospitalResponse(BaseModel):
    id: int
    hospital_code: str
    name: str
    location: str

    model_config = ConfigDict(
        from_attributes=True
    )