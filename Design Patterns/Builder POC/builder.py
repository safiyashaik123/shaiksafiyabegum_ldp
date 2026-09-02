from abc import ABC, abstractmethod
from typing import Any

from models import APIRequest


# --------------------------------------------------
# Abstract Builder
# --------------------------------------------------

class Builder(ABC):

    @abstractmethod
    def set_method(self, method: str) -> "Builder":
        pass

    @abstractmethod
    def set_url(self, url: str) -> "Builder":
        pass

    @abstractmethod
    def add_header(self, key: str, value: str) -> "Builder":
        pass

    @abstractmethod
    def add_query_param(self, key: str, value: Any) -> "Builder":
        pass

    @abstractmethod
    def set_body(self, body: Any) -> "Builder":
        pass

    @abstractmethod
    def set_timeout(self, timeout: int) -> "Builder":
        pass

    @abstractmethod
    def set_retry_count(self, retry_count: int) -> "Builder":
        pass

    @abstractmethod
    def build(self) -> APIRequest:
        pass


# --------------------------------------------------
# Concrete Builder
# --------------------------------------------------

class RequestBuilder(Builder):

    VALID_METHODS = {
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    }

    def __init__(self) -> None:
        self.reset()

    def reset(self) -> "RequestBuilder":
        # Mutable construction state
        self._method: str | None = None
        self._url: str | None = None
        self._headers: dict[str, str] = {}
        self._query_params: dict[str, Any] = {}
        self._body: Any = None
        self._timeout: int = 30
        self._retry_count: int = 0

        return self

    def set_method(self, method: str) -> "RequestBuilder":
        self._method = method.upper()
        return self

    def set_url(self, url: str) -> "RequestBuilder":
        self._url = url
        return self

    def add_header(
        self,
        key: str,
        value: str
    ) -> "RequestBuilder":
        self._headers[key] = value
        return self

    def add_query_param(
        self,
        key: str,
        value: Any
    ) -> "RequestBuilder":
        self._query_params[key] = value
        return self

    def set_body(
        self,
        body: Any
    ) -> "RequestBuilder":
        self._body = body
        return self

    def set_timeout(
        self,
        timeout: int
    ) -> "RequestBuilder":
        self._timeout = timeout
        return self

    def set_retry_count(
        self,
        retry_count: int
    ) -> "RequestBuilder":
        self._retry_count = retry_count
        return self

    def _validate(self) -> None:

        if not self._method:
            raise ValueError("HTTP method is required")

        if self._method not in self.VALID_METHODS:
            raise ValueError(
                f"Unsupported HTTP method: {self._method}"
            )

        if not self._url:
            raise ValueError("URL is required")

        if self._timeout <= 0:
            raise ValueError(
                "Timeout must be greater than 0"
            )

        if self._retry_count < 0:
            raise ValueError(
                "Retry count cannot be negative"
            )

        if self._method == "GET" and self._body is not None:
            raise ValueError(
                "GET request cannot contain a body"
            )

    def build(self) -> APIRequest:

        # Validate before creating the Product
        self._validate()

        # Create finalized Product
        product = APIRequest(
            method=self._method,
            url=self._url,
            headers=self._headers,
            query_params=self._query_params,
            body=self._body,
            timeout=self._timeout,
            retry_count=self._retry_count,
        )

        # Builder can be reused for another Product
        self.reset()

        return product


# --------------------------------------------------
# Director
# --------------------------------------------------

class RequestDirector:

    def __init__(
        self,
        builder: RequestBuilder
    ) -> None:
        self._builder = builder

    def build_basic_get(
        self,
        url: str
    ) -> APIRequest:

        return (
            self._builder
            .set_method("GET")
            .set_url(url)
            .build()
        )

    def build_authenticated_get(
        self,
        url: str,
        token: str
    ) -> APIRequest:

        return (
            self._builder
            .set_method("GET")
            .set_url(url)
            .add_header(
                "Authorization",
                f"Bearer {token}"
            )
            .build()
        )

    def build_json_post(
        self,
        url: str,
        body: dict[str, Any]
    ) -> APIRequest:

        return (
            self._builder
            .set_method("POST")
            .set_url(url)
            .add_header(
                "Content-Type",
                "application/json"
            )
            .set_body(body)
            .build()
        )