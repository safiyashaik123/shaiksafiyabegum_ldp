from abc import ABC, abstractmethod


# ============================================================
# ABSTRACT BASE CLASS
# ============================================================

class Job(ABC):

    @abstractmethod
    def execute(self):
        pass


# ============================================================
# CONCRETE JOBS
# ============================================================

class ReportJob(Job):

    def execute(self):

        print(
            "[REPORT] Generating monthly report..."
        )

        print(
            "[REPORT] Report generated successfully."
        )

        return True


class EmailJob(Job):

    def execute(self):

        print(
            "[EMAIL] Sending notification email..."
        )

        print(
            "[EMAIL] Email sent successfully."
        )

        return True


class BackupJob(Job):

    def execute(self):

        print(
            "[BACKUP] Creating database backup..."
        )

        print(
            "[BACKUP] Backup completed successfully."
        )

        return True


# ============================================================
# MANUAL DATA CLASS
# ============================================================

class JobConfiguration:

    def __init__(
        self,
        job_id,
        job_name,
        priority,
        retry_count,
        enabled=True
    ):

        if not job_id:
            raise ValueError(
                "Job ID is required."
            )

        if not job_name:
            raise ValueError(
                "Job name is required."
            )

        if priority < 1:
            raise ValueError(
                "Priority must be greater than zero."
            )

        if retry_count < 0:
            raise ValueError(
                "Retry count cannot be negative."
            )

        self.job_id = job_id
        self.job_name = job_name
        self.priority = priority
        self.retry_count = retry_count
        self.enabled = enabled

    def __repr__(self):

        return (
            "JobConfiguration("
            f"job_id='{self.job_id}', "
            f"job_name='{self.job_name}', "
            f"priority={self.priority}, "
            f"retry_count={self.retry_count}, "
            f"enabled={self.enabled}"
            ")"
        )


# ============================================================
# CLASSIC PROCESSOR
# ============================================================

class JobProcessor:

    def process(self, job):

        # Explicit contract enforcement

        if not isinstance(job, Job):

            raise TypeError(
                "Object must inherit from Job."
            )

        print(
            f"\n[CLASSIC] Processing: "
            f"{job.__class__.__name__}"
        )

        # Logging is implemented directly
        # inside the processor.

        print(
            "[CLASSIC] Starting execution..."
        )

        try:

            result = job.execute()

            print(
                "[CLASSIC] Execution completed."
            )

            return result

        except Exception as error:

            print(
                f"[CLASSIC] Execution failed: "
                f"{error}"
            )

            raise


# ============================================================
# UNRELATED COMPONENT
# ============================================================
#
# This class has execute(), but it does NOT inherit from Job.
#
# Classic implementation will reject it.
# ============================================================

class DeploymentTask:

    def execute(self):

        print(
            "[DEPLOYMENT] Deploying application..."
        )

        return True