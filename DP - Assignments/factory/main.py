# import orders

# from order_factory import OnlineOrderProcessingFactory


# # ============================================================
# # DISPLAY AVAILABLE ORDER TYPES
# # ============================================================

# def display_order_types(
#     factory: OnlineOrderProcessingFactory
# ) -> None:

#     print("\nAvailable order types:")

#     for order_type in factory.available_order_types():
#         print(f"- {order_type}")


# # ============================================================
# # PROCESS ORDER
# # ============================================================

# def process_order(
#     factory: OnlineOrderProcessingFactory,
#     order_type: str
# ) -> None:

#     order = factory.create_order(order_type)

#     print(f"\nSelected order type: {order_type}")

#     order.process()


# # ============================================================
# # MAIN
# # ============================================================

# def main():

#     factory = OnlineOrderProcessingFactory()

#     print("=" * 60)
#     print("ONLINE ORDER PROCESSING")
#     print("=" * 60)

#     while True:

#         display_order_types(factory)

#         print("- exit")

#         order_type = input(
#             "\nEnter order type: "
#         ).strip()

#         if order_type.lower() == "exit":

#             print("Application closed.")
#             break

#         try:

#             process_order(
#                 factory,
#                 order_type
#             )

#         except ValueError as error:

#             print(f"Error: {error}")


# if __name__ == "__main__":
#     main()

from calculator_factory import CalculatorCreatorFactory
from calculators import (
    ScientificCalculator,
    ProgrammerCalculator,
)


# ============================================================
# CALCULATOR APPLICATION
# ============================================================

def calculator_application():

    while True:

        print("\n" + "=" * 50)
        print("CALCULATOR APPLICATION")
        print("=" * 50)

        print("1. Basic Calculator")
        print("2. Scientific Calculator")
        print("3. Programmer Calculator")
        print("0. Exit")

        choice = input(
            "\nSelect calculator: "
        ).strip()

        if choice == "0":
            print("Calculator application closed.")
            break

        try:

            creator = CalculatorCreatorFactory.create_creator(
                choice
            )

            calculator = creator.get_calculator()

            if choice == "1":
                basic_menu(calculator)

            elif choice == "2":
                scientific_menu(calculator)

            elif choice == "3":
                programmer_menu(calculator)

        except ValueError as error:

            print(f"Error: {error}")


# ============================================================
# BASIC MENU
# ============================================================

def basic_menu(calculator):

    print("\n--- BASIC CALCULATOR ---")

    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    operation = input(
        "Select operation: "
    ).strip()

    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))

    if operation == "1":
        result = calculator.add(a, b)

    elif operation == "2":
        result = calculator.subtract(a, b)

    elif operation == "3":
        result = calculator.multiply(a, b)

    elif operation == "4":
        result = calculator.divide(a, b)

    else:
        print("Invalid operation.")
        return

    print("Result:", result)


# ============================================================
# SCIENTIFIC MENU
# ============================================================

def scientific_menu(calculator):

    print("\n--- SCIENTIFIC CALCULATOR ---")

    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Power")
    print("6. Square Root")
    print("7. Sin")
    print("8. Cos")
    print("9. Log")

    operation = input(
        "Select operation: "
    ).strip()

    if operation in {"1", "2", "3", "4", "5"}:

        a = float(input("Enter first number: "))
        b = float(input("Enter second number: "))

        if operation == "1":
            result = calculator.add(a, b)

        elif operation == "2":
            result = calculator.subtract(a, b)

        elif operation == "3":
            result = calculator.multiply(a, b)

        elif operation == "4":
            result = calculator.divide(a, b)

        else:
            result = calculator.power(a, b)

    elif operation == "6":

        value = float(input("Enter number: "))

        result = calculator.square_root(value)

    elif operation == "7":

        value = float(input("Enter angle in degrees: "))

        result = calculator.sin(value)

    elif operation == "8":

        value = float(input("Enter angle in degrees: "))

        result = calculator.cos(value)

    elif operation == "9":

        value = float(input("Enter number: "))

        result = calculator.log(value)

    else:

        print("Invalid operation.")
        return

    print("Result:", result)


# ============================================================
# PROGRAMMER MENU
# ============================================================

def programmer_menu(calculator):

    print("\n--- PROGRAMMER CALCULATOR ---")

    print("1. AND")
    print("2. OR")
    print("3. XOR")
    print("4. NOT")
    print("5. Decimal to Binary")
    print("6. Decimal to Hexadecimal")

    operation = input(
        "Select operation: "
    ).strip()

    if operation in {"1", "2", "3"}:

        a = int(input("Enter first integer: "))
        b = int(input("Enter second integer: "))

        if operation == "1":
            result = calculator.bitwise_and(a, b)

        elif operation == "2":
            result = calculator.bitwise_or(a, b)

        else:
            result = calculator.bitwise_xor(a, b)

    elif operation == "4":

        value = int(input("Enter integer: "))

        result = calculator.bitwise_not(value)

    elif operation == "5":

        value = int(input("Enter integer: "))

        result = calculator.to_binary(value)

    elif operation == "6":

        value = int(input("Enter integer: "))

        result = calculator.to_hexadecimal(value)

    else:

        print("Invalid operation.")
        return

    print("Result:", result)
    

def main():

    # Online Order Processing
    # ...

    # Calculator
    calculator_application()


if __name__ == "__main__":
    main()