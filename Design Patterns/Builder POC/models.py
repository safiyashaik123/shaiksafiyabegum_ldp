from dataclasses import dataclass
from types import MappingProxyType
from typing import Any, Mapping


@dataclass(frozen=True)
class APIRequest:
    method: str
    url: str
    headers: Mapping[str, str]
    query_params: Mapping[str, Any]
    body: Any
    timeout: int
    retry_count: int

    def __post_init__(self) -> None:
        # Make nested dictionaries immutable as well.
        object.__setattr__(
            self,
            "headers",
            MappingProxyType(dict(self.headers))
        )

        object.__setattr__(
            self,
            "query_params",
            MappingProxyType(dict(self.query_params))
        )