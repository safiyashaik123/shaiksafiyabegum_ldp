import math
from abc import ABC, abstractmethod


# ============================================================
# CALCULATOR PRODUCT
# ============================================================

class Calculator(ABC):

    @abstractmethod
    def add(self, a: float, b: float) -> float:
        pass

    @abstractmethod
    def subtract(self, a: float, b: float) -> float:
        pass

    @abstractmethod
    def multiply(self, a: float, b: float) -> float:
        pass

    @abstractmethod
    def divide(self, a: float, b: float) -> float:
        pass


# ============================================================
# BASIC CALCULATOR
# ============================================================

class BasicCalculator(Calculator):

    def add(self, a: float, b: float) -> float:
        return a + b

    def subtract(self, a: float, b: float) -> float:
        return a - b

    def multiply(self, a: float, b: float) -> float:
        return a * b

    def divide(self, a: float, b: float) -> float:

        if b == 0:
            raise ValueError("Cannot divide by zero.")

        return a / b


# ============================================================
# SCIENTIFIC CALCULATOR
# ============================================================

class ScientificCalculator(BasicCalculator):

    def power(self, a: float, b: float) -> float:
        return math.pow(a, b)

    def square_root(self, value: float) -> float:

        if value < 0:
            raise ValueError(
                "Square root of a negative number is not supported."
            )

        return math.sqrt(value)

    def sin(self, value: float) -> float:
        return math.sin(math.radians(value))

    def cos(self, value: float) -> float:
        return math.cos(math.radians(value))

    def log(self, value: float) -> float:

        if value <= 0:
            raise ValueError(
                "Logarithm requires a positive number."
            )

        return math.log10(value)


# ============================================================
# PROGRAMMER CALCULATOR
# ============================================================

class ProgrammerCalculator(BasicCalculator):

    def bitwise_and(self, a: int, b: int) -> int:
        return a & b

    def bitwise_or(self, a: int, b: int) -> int:
        return a | b

    def bitwise_xor(self, a: int, b: int) -> int:
        return a ^ b

    def bitwise_not(self, value: int) -> int:
        return ~value

    def to_binary(self, value: int) -> str:
        return bin(value)

    def to_hexadecimal(self, value: int) -> str:
        return hex(value)