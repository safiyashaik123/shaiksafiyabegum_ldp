"""set default phone

Revision ID: 38cafe8cfb12
Revises: 6b607b02a0bc
Create Date: 2026-08-19 19:41:57.462557

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '38cafe8cfb12'
down_revision: Union[str, Sequence[str], None] = '6b607b02a0bc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute(
        """
        UPDATE employees
        SET phone = 'NOT_PROVIDED'
        WHERE phone IS NULL
        """
    )


def downgrade() -> None:
    op.execute(
        """
        UPDATE employees
        SET phone = NULL
        WHERE phone = 'NOT_PROVIDED'
        """
    )
