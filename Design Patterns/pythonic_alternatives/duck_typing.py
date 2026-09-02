# ============================================================
# REPORT COMPONENT
# ============================================================

class ReportGenerator:

    def execute(self):

        print(
            "[REPORT] Generating monthly report..."
        )


# ============================================================
# EMAIL COMPONENT
# ============================================================

class EmailNotification:

    def execute(self):

        print(
            "[EMAIL] Sending notification email..."
        )


# ============================================================
# DATABASE COMPONENT
# ============================================================

class DatabaseBackup:

    def execute(self):

        print(
            "[BACKUP] Creating database backup..."
        )


# ============================================================
# EXTERNAL COMPONENT
# ============================================================
#
# This class does not inherit from any Job class.
#
# It still works because it provides execute().
# ============================================================

class DeploymentService:

    def execute(self):

        print(
            "[DEPLOYMENT] Deploying application..."
        )


# ============================================================
# DUCK-TYPED PROCESSOR
# ============================================================

class JobProcessor:

    def process(self, task):

        print(
            f"\n[PROCESSOR] Processing: "
            f"{task.__class__.__name__}"
        )

        # We don't check the class type.
        #
        # We simply expect the object to provide
        # the required behavior: execute().

        task.execute()