"""add location to employee

Revision ID: 62c9f4ec74ec
Revises: 38cafe8cfb12
Create Date: 2026-08-19 19:25:56.519841

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "62c9f4ec74ec"

down_revision: Union[str, Sequence[str], None] = "38cafe8cfb12"

branch_labels: Union[str, Sequence[str], None] = None

depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    op.add_column(
        "employees",
        sa.Column(
            "location",
            sa.String(),
            nullable=True
        )
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_column(
        "employees",
        "location"
    )