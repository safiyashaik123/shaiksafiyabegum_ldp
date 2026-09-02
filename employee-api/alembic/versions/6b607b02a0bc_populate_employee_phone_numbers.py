"""populate employee phone numbers

Revision ID: 6b607b02a0bc
Revises: <THE_PREVIOUS_REVISION>
"""

from alembic import op


revision = "6b607b02a0bc"

# IMPORTANT:
# Replace this with the value that the deleted migration originally had.
down_revision = "e17cb34dde47"

branch_labels = None
depends_on = None


def upgrade() -> None:
    op.execute(
        """
        UPDATE employees
        SET phone = '9999999991'
        WHERE id = 10
        """
    )

    op.execute(
        """
        UPDATE employees
        SET phone = '9999999992'
        WHERE id = 11
        """
    )

    op.execute(
        """
        UPDATE employees
        SET phone = '9999999994'
        WHERE id = 13
        """
    )




def downgrade() -> None:
    op.execute(
        """
        UPDATE employees
        SET phone = NULL
        WHERE id IN (10, 11, 13)
        """
    )