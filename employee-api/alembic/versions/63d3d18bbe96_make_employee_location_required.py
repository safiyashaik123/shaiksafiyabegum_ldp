"""make employee location required

Revision ID: 63d3d18bbe96
Revises: b0b3fbdcea6c
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


revision: str = "63d3d18bbe96"

down_revision: Union[str, Sequence[str], None] = "b0b3fbdcea6c"

branch_labels: Union[str, Sequence[str], None] = None

depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:

    with op.batch_alter_table("employees") as batch_op:

        batch_op.alter_column(
            "location",
            existing_type=sa.String(),
            nullable=False
        )


def downgrade() -> None:

    with op.batch_alter_table("employees") as batch_op:

        batch_op.alter_column(
            "location",
            existing_type=sa.String(),
            nullable=True
        )