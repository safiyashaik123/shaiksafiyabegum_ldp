from abc import ABC, abstractmethod

from calculators import (
    Calculator,
    BasicCalculator,
    ScientificCalculator,
    ProgrammerCalculator,
)


# ============================================================
# CREATOR
# ============================================================

class CalculatorCreator(ABC):

    @abstractmethod
    def create_calculator(self) -> Calculator:
        pass

    def get_calculator(self) -> Calculator:
        return self.create_calculator()


# ============================================================
# BASIC CALCULATOR CREATOR
# ============================================================

class BasicCalculatorCreator(CalculatorCreator):

    def create_calculator(self) -> Calculator:
        return BasicCalculator()


# ============================================================
# SCIENTIFIC CALCULATOR CREATOR
# ============================================================

class ScientificCalculatorCreator(CalculatorCreator):

    def create_calculator(self) -> Calculator:
        return ScientificCalculator()


# ============================================================
# PROGRAMMER CALCULATOR CREATOR
# ============================================================

class ProgrammerCalculatorCreator(CalculatorCreator):

    def create_calculator(self) -> Calculator:
        return ProgrammerCalculator()


# ============================================================
# RUNTIME CREATOR FACTORY
# ============================================================

class CalculatorCreatorFactory:

    _creators = {
        "1": BasicCalculatorCreator,
        "2": ScientificCalculatorCreator,
        "3": ProgrammerCalculatorCreator,
    }

    @classmethod
    def create_creator(cls, choice: str) -> CalculatorCreator:

        creator_class = cls._creators.get(choice)

        if creator_class is None:
            raise ValueError(
                "Invalid calculator selection."
            )

        return creator_class()