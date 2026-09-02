"""backfill employee location

Revision ID: b0b3fbdcea6c
Revises: 62c9f4ec74ec
Create Date: 2026-08-19 20:18:51.317191

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b0b3fbdcea6c'
down_revision: Union[str, Sequence[str], None] = '62c9f4ec74ec'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:

    op.execute(
        """
        UPDATE employees
        SET location = 'India'
        WHERE location IS NULL
        """
    )


def downgrade() -> None:

    op.execute(
        """
        UPDATE employees
        SET location = NULL
        WHERE location = 'India'
        """
    )
