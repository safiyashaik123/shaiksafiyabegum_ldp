from functools import wraps
from time import perf_counter


# ============================================================
# LOGGING + EXECUTION TIME
# ============================================================

def log_execution(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print(f"\n[LOG] Starting: {func.__name__}")

        start_time = perf_counter()

        try:
            return func(*args, **kwargs)

        finally:
            execution_time = perf_counter() - start_time

            print(
                f"[LOG] Completed: {func.__name__} "
                f"({execution_time:.4f}s)"
            )

    return wrapper


# ============================================================
# RETRY DECORATOR
# ============================================================

def retry(max_attempts=3):

    def decorator(func):

        @wraps(func)
        def wrapper(*args, **kwargs):

            for attempt in range(
                1,
                max_attempts + 1
            ):

                try:

                    print(
                        f"[RETRY] Attempt "
                        f"{attempt}/{max_attempts}"
                    )

                    return func(
                        *args,
                        **kwargs
                    )

                except OSError as error:

                    print(
                        f"[RETRY] I/O failure: {error}"
                    )

                    if attempt == max_attempts:

                        print(
                            "[RETRY] Attempts exhausted."
                        )

                        raise

        return wrapper

    return decorator


# ============================================================
# FILE IMPORT SERVICE
# ============================================================

class FileImportService:

    def __init__(self):

        self._attempts = 0

    @log_execution
    @retry(max_attempts=3)
    def import_file(self, file_name):

        self._attempts += 1

        print(
            f"[IMPORT] Reading file: {file_name}"
        )

        # Simulate a transient I/O failure.
        #
        # The first two attempts fail.
        # The third attempt succeeds.

        if self._attempts < 3:

            raise OSError(
                "File temporarily unavailable"
            )

        print(
            "[IMPORT] File imported successfully."
        )

        return True