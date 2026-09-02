"""normalize employee names

Revision ID: 447c3c981f6a
Revises: 63d3d18bbe96
Create Date: 2026-08-19 20:33:06.370050

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '447c3c981f6a'
down_revision: Union[str, Sequence[str], None] = '63d3d18bbe96'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:

    employees = sa.table(
        "employees",
        sa.column("id", sa.Integer),
        sa.column("name", sa.String)
    )

    connection = op.get_bind()

    connection.execute(
        employees.update()
        .where(employees.c.name.isnot(None))
        .values(
            name=sa.func.upper(employees.c.name)
        )
    )


def downgrade() -> None:
    pass