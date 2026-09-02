from dataclasses import dataclass


# ============================================================
# MUTABLE DATACLASS
# ============================================================

@dataclass
class JobConfiguration:

    job_id: str
    job_name: str
    priority: int
    retry_count: int
    enabled: bool = True

    def __post_init__(self):

        if self.priority < 1:

            raise ValueError(
                "Priority must be greater than zero."
            )

        if self.retry_count < 0:

            raise ValueError(
                "Retry count cannot be negative."
            )


# ============================================================
# IMMUTABLE DATACLASS
# ============================================================

@dataclass(frozen=True)
class JobMetadata:

    job_id: str
    created_by: str
    environment: str
    version: str