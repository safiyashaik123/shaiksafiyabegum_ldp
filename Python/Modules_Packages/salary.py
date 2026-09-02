from constants import BONUS_PERCENTAGE


def calculate_bonus(salary):

    return salary * BONUS_PERCENTAGE / 100


def calculate_salary(base_salary):

    bonus = calculate_bonus(base_salary)

    total = base_salary + bonus

    return total