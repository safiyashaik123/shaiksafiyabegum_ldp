from decorators import FileImportService

from dataclasses_demo import (
    JobConfiguration,
    JobMetadata
)

from duck_typing import (
    ReportGenerator,
    EmailNotification,
    DatabaseBackup,
    DeploymentService,
    JobProcessor
)


# ============================================================
# DECORATOR DEMO
# ============================================================

def demonstrate_decorators():

    print("\n" + "=" * 65)
    print("                 DECORATOR DEMO")
    print("=" * 65)

    service = FileImportService()

    service.import_file("sales_data.csv")

# ============================================================
# DATACLASS DEMO
# ============================================================

def demonstrate_dataclasses():

    print("\n" + "=" * 65)
    print("                 DATACLASS DEMO")
    print("=" * 65)

    # --------------------------------------------------------
    # MUTABLE DATACLASS
    # --------------------------------------------------------

    configuration = JobConfiguration(
        job_id="JOB-101",
        job_name="Monthly Report",
        priority=1,
        retry_count=3
    )

    print("\n[MUTABLE DATACLASS]")

    print(f"Before : priority = {configuration.priority}")

    configuration.priority = 2

    print(f"After  : priority = {configuration.priority}")


    # --------------------------------------------------------
    # IMMUTABLE DATACLASS
    # --------------------------------------------------------

    metadata = JobMetadata(
        job_id="JOB-101",
        created_by="system",
        environment="production",
        version="1.0"
    )

    print("\n[IMMUTABLE DATACLASS]")

    print(f"Before : version = {metadata.version}")

    try:
        metadata.version = "2.0"

    except Exception as error:
        print(
            f"After  : modification blocked "
            f"({error.__class__.__name__})"
        )

    print(f"Value  : version = {metadata.version}")


# ============================================================
# DUCK TYPING DEMO
# ============================================================

def demonstrate_duck_typing():

    print("\n" + "=" * 65)
    print("                 DUCK TYPING DEMO")
    print("=" * 65)

    processor = JobProcessor()

    processor.process(
        ReportGenerator()
    )

    processor.process(
        EmailNotification()
    )

    processor.process(
        DatabaseBackup()
    )

    print("\n[DUCK TYPING] Unrelated component:")

    processor.process(
        DeploymentService()
    )


# ============================================================
# MAIN
# ============================================================

def main():

    demonstrate_decorators()

    demonstrate_dataclasses()

    demonstrate_duck_typing()


if __name__ == "__main__":
    main()