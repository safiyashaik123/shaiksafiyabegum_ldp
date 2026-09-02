import multiprocessing
import threading

from resource_manager import ApplicationResourceManager

from services import (
    OrderService,
    PaymentService,
    NotificationService
)


# ==================================================
# 1. SINGLETON VERIFICATION
# ==================================================

def singleton_demo():

    print("\n" + "=" * 50)
    print("1. SINGLETON VERIFICATION")
    print("=" * 50)

    manager1 = ApplicationResourceManager()
    manager2 = ApplicationResourceManager()

    print("Manager 1:", id(manager1))
    print("Manager 2:", id(manager2))

    print(
        "Same instance:",
        manager1 is manager2
    )


# ==================================================
# 2. SHARED STATE
# ==================================================

def shared_state_demo():

    print("\n" + "=" * 50)
    print("2. SHARED STATE")
    print("=" * 50)

    manager1 = ApplicationResourceManager()
    manager2 = ApplicationResourceManager()

    print(
        "Initial currency:",
        manager1.get_config("currency")
    )

    # Change configuration through manager1
    manager1.set_config(
        "currency",
        "USD"
    )

    print(
        "Manager 1 currency:",
        manager1.get_config("currency")
    )

    # Read through manager2
    print(
        "Manager 2 currency:",
        manager2.get_config("currency")
    )


# ==================================================
# 3. MULTIPLE SERVICES
# ==================================================

def service_demo():

    print("\n" + "=" * 50)
    print("3. MULTIPLE SERVICES")
    print("=" * 50)

    order_service = OrderService()

    payment_service = PaymentService()

    notification_service = NotificationService()

    # Create order
    order_service.create_order(
        "ORD-1001"
    )

    # Process payment using shared state
    payment_service.process_payment()

    # Send notification using shared state
    notification_service.send_notification()

    print("\nResource Manager identities:")

    print(
        "Order Service:",
        id(order_service.resource_manager)
    )

    print(
        "Payment Service:",
        id(payment_service.resource_manager)
    )

    print(
        "Notification Service:",
        id(notification_service.resource_manager)
    )

    print(
        "All services use same instance:",
        (
            order_service.resource_manager
            is payment_service.resource_manager
            is notification_service.resource_manager
        )
    )


# ==================================================
# 4. THREAD TEST
# ==================================================

def thread_worker(thread_name, order_id):

    manager = ApplicationResourceManager()

    print(
        f"{thread_name} | "
        f"Thread ID: {threading.get_ident()} | "
        f"Object ID: {id(manager)}"
    )

    # Concurrently modify shared application state
    manager.increment_orders()

    manager.set_last_order(order_id)

    manager.set_cache(
        thread_name,
        order_id
    )


def thread_demo():

    print("\n" + "=" * 50)
    print("4. THREAD SAFETY")
    print("=" * 50)

    threads = []

    for i in range(5):

        thread = threading.Thread(
            target=thread_worker,
            args=(
                f"Thread-{i + 1}",
                f"ORD-{2000 + i}"
            )
        )

        threads.append(thread)

    # Start all threads
    for thread in threads:
        thread.start()

    # Wait for all threads
    for thread in threads:
        thread.join()

    manager = ApplicationResourceManager()

    print(
        "\nFinal active orders:",
        manager.get_state("active_orders")
    )

    print(
        "Final last order:",
        manager.get_state("last_order")
    )


# ==================================================
# 5. PROCESS TEST
# ==================================================

def process_worker():

    manager = ApplicationResourceManager()

    print(
        f"Process ID: "
        f"{multiprocessing.current_process().pid} | "
        f"Object ID: {id(manager)}"
    )


def process_demo():

    print("\n" + "=" * 50)
    print("5. PROCESS SCOPE")
    print("=" * 50)

    processes = []

    for _ in range(3):

        process = multiprocessing.Process(
            target=process_worker
        )

        processes.append(process)

    # Start all processes
    for process in processes:
        process.start()

    # Wait for all processes
    for process in processes:
        process.join()


# ==================================================
# MAIN
# ==================================================

if __name__ == "__main__":

    singleton_demo()

    shared_state_demo()

    service_demo()

    thread_demo()

    process_demo()