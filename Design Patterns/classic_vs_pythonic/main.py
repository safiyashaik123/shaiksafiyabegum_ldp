from classic import (
    JobProcessor as ClassicJobProcessor,
    ReportJob as ClassicReportJob,
    EmailJob as ClassicEmailJob,
    BackupJob as ClassicBackupJob,
    DeploymentTask as ClassicDeploymentTask,
    JobConfiguration as ClassicJobConfiguration
)

from pythonic import (
    JobProcessor as PythonicJobProcessor,
    ReportJob as PythonicReportJob,
    EmailJob as PythonicEmailJob,
    BackupJob as PythonicBackupJob,
    DeploymentTask as PythonicDeploymentTask,
    JobConfiguration as PythonicJobConfiguration
)


# ============================================================
# CLASSIC IMPLEMENTATION
# ============================================================

def demonstrate_classic():

    print("\n")
    print("=" * 70)
    print("                  CLASSIC IMPLEMENTATION")
    print("=" * 70)

    processor = ClassicJobProcessor()

    # --------------------------------------------------------
    # POLYMORPHISM
    # --------------------------------------------------------

    print("\n--- Processing supported jobs ---")

    processor.process(
        ClassicReportJob()
    )

    processor.process(
        ClassicEmailJob()
    )

    processor.process(
        ClassicBackupJob()
    )

    # --------------------------------------------------------
    # STRICT CONTRACT
    # --------------------------------------------------------

    print("\n--- Testing unrelated component ---")

    try:

        processor.process(
            ClassicDeploymentTask()
        )

    except TypeError as error:

        print(
            f"[CLASSIC] Rejected: {error}"
        )

    # --------------------------------------------------------
    # MANUAL DATA CLASS
    # --------------------------------------------------------

    print("\n--- Manual configuration object ---")

    configuration = ClassicJobConfiguration(
        job_id="JOB-101",
        job_name="Monthly Report",
        priority=1,
        retry_count=3
    )

    print(configuration)
    

    configuration.priority = 2

    print(
        f"After modification: "
        f"priority={configuration.priority}"
    )


# ============================================================
# PYTHONIC IMPLEMENTATION
# ============================================================

def demonstrate_pythonic():

    print("\n")
    print("=" * 70)
    print("                  PYTHONIC IMPLEMENTATION")
    print("=" * 70)

    processor = PythonicJobProcessor()

    # --------------------------------------------------------
    # DUCK TYPING
    # --------------------------------------------------------

    print("\n--- Processing supported jobs ---")

    processor.process(
        PythonicReportJob()
    )

    processor.process(
        PythonicEmailJob()
    )

    processor.process(
        PythonicBackupJob()
    )

    # --------------------------------------------------------
    # DUCK TYPING EXTENSIBILITY
    # --------------------------------------------------------

    print(
        "\n--- Testing unrelated component ---"
    )

    processor.process(
        PythonicDeploymentTask()
    )

    # --------------------------------------------------------
    # DATACLASS
    # --------------------------------------------------------

    print(
        "\n--- Dataclass configuration object ---"
    )

    configuration = PythonicJobConfiguration(
        job_id="JOB-101",
        job_name="Monthly Report",
        priority=1,
        retry_count=3
    )

    print(configuration)

    configuration.priority = 2

    print(
        f"After modification: "
        f"priority={configuration.priority}"
    )




# ============================================================
# MAIN
# ============================================================

def main():

    demonstrate_classic()

    demonstrate_pythonic()


if __name__ == "__main__":
    main()