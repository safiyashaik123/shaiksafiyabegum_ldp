"""merge branches

Revision ID: fdb818174635
Revises: f3e8b99d474b, 542d83e175be
Create Date: 2026-08-19 20:49:10.218789

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'fdb818174635'
down_revision: Union[str, Sequence[str], None] = ('f3e8b99d474b', '542d83e175be')
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
