from dataclasses import dataclass
from functools import wraps
from time import perf_counter


# ============================================================
# PYTHONIC DATA MODEL
# ============================================================

@dataclass
class JobConfiguration:

    job_id: str
    job_name: str
    priority: int
    retry_count: int
    enabled: bool = True

    def __post_init__(self):

        if not self.job_id:
            raise ValueError(
                "Job ID is required."
            )

        if not self.job_name:
            raise ValueError(
                "Job name is required."
            )

        if self.priority < 1:
            raise ValueError(
                "Priority must be greater than zero."
            )

        if self.retry_count < 0:
            raise ValueError(
                "Retry count cannot be negative."
            )


# ============================================================
# DUCK-TYPED JOBS
# ============================================================

class ReportJob:

    def execute(self):

        print(
            "[REPORT] Generating monthly report..."
        )

        print(
            "[REPORT] Report generated successfully."
        )

        return True


class EmailJob:

    def execute(self):

        print(
            "[EMAIL] Sending notification email..."
        )

        print(
            "[EMAIL] Email sent successfully."
        )

        return True


class BackupJob:

    def execute(self):

        print(
            "[BACKUP] Creating database backup..."
        )

        print(
            "[BACKUP] Backup completed successfully."
        )

        return True


# ============================================================
# UNRELATED COMPONENT
# ============================================================
#
# No inheritance from Job.
#
# It only provides execute().
#
# This will work with the Pythonic processor.
# ============================================================

class DeploymentTask:

    def execute(self):

        print(
            "[DEPLOYMENT] Deploying application..."
        )

        print(
            "[DEPLOYMENT] Deployment completed successfully."
        )

        return True


# ============================================================
# DECORATOR
# ============================================================

def log_execution(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        print(
            f"\n[DECORATOR] Starting: "
            f"{func.__name__}"
        )

        start_time = perf_counter()

        try:

            return func(
                *args,
                **kwargs
            )

        finally:

            execution_time = (
                perf_counter() - start_time
            )

            print(
                f"[DECORATOR] Finished: "
                f"{func.__name__} "
                f"({execution_time:.4f}s)"
            )

    return wrapper


# ============================================================
# PYTHONIC PROCESSOR
# ============================================================

class JobProcessor:

    @log_execution
    def process(self, task):

        # No isinstance() check.
        #
        # The processor only expects the object
        # to provide execute().

        result = task.execute()

        print(
            "[PYTHONIC] Execution completed."
        )

        return result