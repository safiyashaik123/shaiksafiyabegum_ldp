from resource_manager import ApplicationResourceManager


class OrderService:

    def __init__(self):
        self.resource_manager = ApplicationResourceManager()

    def create_order(self, order_id):

        print("\n[Order Service]")

        self.resource_manager.increment_orders()

        self.resource_manager.set_last_order(order_id)

        self.resource_manager.set_cache(
            "last_order",
            order_id
        )

        currency = self.resource_manager.get_config("currency")

        print(f"Creating order: {order_id}")
        print(f"Currency: {currency}")

        print(
            "Active orders:",
            self.resource_manager.get_state("active_orders")
        )


class PaymentService:

    def __init__(self):
        self.resource_manager = ApplicationResourceManager()

    def process_payment(self):

        print("\n[Payment Service]")

        last_order = self.resource_manager.get_cache(
            "last_order"
        )

        currency = self.resource_manager.get_config(
            "currency"
        )

        timeout = self.resource_manager.get_config(
            "payment_timeout"
        )

        print(f"Processing payment for: {last_order}")
        print(f"Currency: {currency}")
        print(f"Payment timeout: {timeout} seconds")


class NotificationService:

    def __init__(self):
        self.resource_manager = ApplicationResourceManager()

    def send_notification(self):

        print("\n[Notification Service]")

        last_order = self.resource_manager.get_state(
            "last_order"
        )

        environment = self.resource_manager.get_config(
            "environment"
        )

        print(f"Sending notification for: {last_order}")
        print(f"Environment: {environment}")