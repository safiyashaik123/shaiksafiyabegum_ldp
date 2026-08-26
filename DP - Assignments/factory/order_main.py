from order_factory import OnlineOrderProcessingFactory

# Importing orders triggers the self-registration
# of all Order implementations.
import orders


# ============================================================
# DISPLAY AVAILABLE ORDER TYPES
# ============================================================

def display_order_types(
    factory: OnlineOrderProcessingFactory
) -> None:

    print("\nAvailable order types:")

    for order_type in factory.available_order_types():
        print(f"- {order_type}")

    print("- exit")


# ============================================================
# PROCESS ORDER
# ============================================================

def process_order(
    factory: OnlineOrderProcessingFactory,
    order_type: str
) -> None:

    order = factory.create_order(order_type)

    print(f"\nSelected order type: {order_type}")

    order.process()


# ============================================================
# MAIN
# ============================================================

def main():

    factory = OnlineOrderProcessingFactory()

    print("=" * 60)
    print("ONLINE ORDER PROCESSING")
    print("=" * 60)

    while True:

        display_order_types(factory)

        order_type = input(
            "\nEnter order type: "
        ).strip()

        if order_type.lower() == "exit":

            print("\nApplication closed.")
            break

        try:

            process_order(
                factory,
                order_type
            )

        except ValueError as error:

            print(f"\nError: {error}")


# ============================================================
# APPLICATION ENTRY POINT
# ============================================================

if __name__ == "__main__":
    main()