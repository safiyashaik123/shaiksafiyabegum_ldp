from builder import RequestBuilder, RequestDirector
from models import APIRequest


# --------------------------------------------------
# WITHOUT BUILDER
# --------------------------------------------------

def without_builder_demo() -> None:

    print("\n=== WITHOUT BUILDER ===")

    request = APIRequest(
        method="POST",
        url="/employees",
        headers={
            "Authorization": "Bearer token",
            "Content-Type": "application/json",
        },
        query_params={
            "department": "engineering"
        },
        body={
            "name": "John"
        },
        timeout=60,
        retry_count=3,
    )

    print(request)


# --------------------------------------------------
# WITH BUILDER
# --------------------------------------------------

def builder_demo() -> None:

    print("\n=== WITH BUILDER ===")

    builder = RequestBuilder()

    request = (
        builder
        .set_method("POST")
        .set_url("/employees")
        .add_header(
            "Authorization",
            "Bearer token"
        )
        .add_header(
            "Content-Type",
            "application/json"
        )
        .add_query_param(
            "department",
            "engineering"
        )
        .set_body({
            "name": "John"
        })
        .set_timeout(60)
        .set_retry_count(3)
        .build()
    )

    print(request)


# --------------------------------------------------
# DIRECTOR
# --------------------------------------------------

def director_demo() -> None:

    print("\n=== DIRECTOR ===")

    builder = RequestBuilder()

    director = RequestDirector(builder)

    basic_get = director.build_basic_get(
        "/employees"
    )

    authenticated_get = (
        director.build_authenticated_get(
            "/employees",
            "token-123"
        )
    )

    json_post = director.build_json_post(
        "/employees",
        {
            "name": "John"
        }
    )

    print("Basic GET:")
    print(basic_get)

    print("\nAuthenticated GET:")
    print(authenticated_get)

    print("\nJSON POST:")
    print(json_post)


# --------------------------------------------------
# VALIDATION
# --------------------------------------------------

def validation_demo() -> None:

    print("\n=== VALIDATION ===")

    try:

        (
            RequestBuilder()
            .set_method("POST")
            .set_url("/employees")
            .set_timeout(0)
            .build()
        )

    except ValueError as error:

        print("Validation failed:")
        print(error)


# --------------------------------------------------
# IMMUTABILITY
# --------------------------------------------------

def immutability_demo() -> None:

    print("\n=== IMMUTABILITY ===")

    request = (
        RequestBuilder()
        .set_method("GET")
        .set_url("/employees")
        .build()
    )

    print("Created:")
    print(request)

    try:

        request.timeout = 60

    except Exception as error:

        print(
            "Cannot modify Product:",
            type(error).__name__
        )

    try:

        request.headers["Authorization"] = "token"

    except Exception as error:

        print(
            "Cannot modify headers:",
            type(error).__name__
        )


# --------------------------------------------------
# BUILDER REUSE
# --------------------------------------------------

def builder_reuse_demo() -> None:

    print("\n=== BUILDER REUSE ===")

    builder = RequestBuilder()

    request1 = (
        builder
        .set_method("GET")
        .set_url("/employees")
        .build()
    )

    request2 = (
        builder
        .set_method("POST")
        .set_url("/employees")
        .set_body({
            "name": "John"
        })
        .build()
    )

    print("Request 1:")
    print(request1)

    print("\nRequest 2:")
    print(request2)


# --------------------------------------------------
# MAIN
# --------------------------------------------------

if __name__ == "__main__":

    without_builder_demo()

    builder_demo()

    director_demo()

    validation_demo()

    immutability_demo()

    builder_reuse_demo()