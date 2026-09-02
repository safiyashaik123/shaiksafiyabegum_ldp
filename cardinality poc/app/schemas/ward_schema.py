from pydantic import BaseModel, ConfigDict


class WardCreate(BaseModel):
    ward_code: str
    name: str
    specialization: str
    hospital_id: int


class WardResponse(BaseModel):
    id: int
    ward_code: str
    name: str
    specialization: str
    hospital_id: int

    model_config = ConfigDict(
        from_attributes=True
    )