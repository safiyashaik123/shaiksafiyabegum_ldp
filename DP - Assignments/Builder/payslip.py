from dataclasses import dataclass


# ============================================================
# PAYSLIP
# ============================================================

@dataclass(frozen=True)
class Payslip:

    basic: float
    hra: float
    da: float
    ta: float
    bonus: float

    pf: float
    tax: float
    insurance: float

    gross_salary: float
    total_deductions: float
    net_salary: float


# ============================================================
# PAYSLIP BUILDER
# ============================================================

class PayslipBuilder:

    def __init__(self):

        self._basic = 0.0
        self._hra = 0.0
        self._da = 0.0
        self._ta = 0.0
        self._bonus = 0.0

        self._pf = 0.0
        self._tax = 0.0
        self._insurance = 0.0

    # --------------------------------------------------------
    # Earnings
    # --------------------------------------------------------

    def basic(self, value):
        self._basic = value
        return self

    def hra(self, value):
        self._hra = value
        return self

    def da(self, value):
        self._da = value
        return self

    def ta(self, value):
        self._ta = value
        return self

    def bonus(self, value):
        self._bonus = value
        return self

    # --------------------------------------------------------
    # Deductions
    # --------------------------------------------------------

    def pf(self, value):
        self._pf = value
        return self

    def tax(self, value):
        self._tax = value
        return self

    def insurance(self, value):
        self._insurance = value
        return self

    # --------------------------------------------------------
    # Build
    # --------------------------------------------------------

    def build(self):

        self._validate()

        gross_salary = (
            self._basic
            + self._hra
            + self._da
            + self._ta
            + self._bonus
        )

        total_deductions = (
            self._pf
            + self._tax
            + self._insurance
        )

        net_salary = (
            gross_salary
            - total_deductions
        )

        return Payslip(
            basic=self._basic,
            hra=self._hra,
            da=self._da,
            ta=self._ta,
            bonus=self._bonus,
            pf=self._pf,
            tax=self._tax,
            insurance=self._insurance,
            gross_salary=gross_salary,
            total_deductions=total_deductions,
            net_salary=net_salary
        )

    # --------------------------------------------------------
    # Validation
    # --------------------------------------------------------

    def _validate(self):

        if self._basic < 0:
            raise ValueError("Basic salary cannot be negative.")

        if self._hra < 0:
            raise ValueError("HRA cannot be negative.")

        if self._da < 0:
            raise ValueError("DA cannot be negative.")

        if self._ta < 0:
            raise ValueError("TA cannot be negative.")

        if self._bonus < 0:
            raise ValueError("Bonus cannot be negative.")

        if self._pf < 0:
            raise ValueError("PF cannot be negative.")

        if self._tax < 0:
            raise ValueError("Tax cannot be negative.")

        if self._insurance < 0:
            raise ValueError("Insurance cannot be negative.")

        if self._basic == 0:
            raise ValueError("Basic salary is required.")