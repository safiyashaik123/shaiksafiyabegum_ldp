"""branch one

Revision ID: f3e8b99d474b
Revises: 447c3c981f6a
Create Date: 2026-08-19 20:45:25.358436

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'f3e8b99d474b'
down_revision: Union[str, Sequence[str], None] = '447c3c981f6a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
