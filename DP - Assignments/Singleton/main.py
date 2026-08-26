from concurrent.futures import wait
from threading import Thread

from singleton_components import (
    Logger,
    DriverManager,
    Cache,
    ThreadPoolManager,
    execute_task,
)


# ============================================================
# 1. LOGGING DEMONSTRATION
# ============================================================

def demonstrate_logging() -> None:

    print("\n=== LOGGING ===")

    logger1 = Logger()
    logger2 = Logger()

    logger1.log("Application started.")
    logger2.log("User service started.")

    print(
        "logger1 is logger2:",
        logger1 is logger2
    )


# ============================================================
# 2. DRIVER DEMONSTRATION
# ============================================================

def demonstrate_driver() -> None:

    print("\n=== DRIVER ===")

    driver1 = DriverManager()
    driver2 = DriverManager()

    driver1.connect()
    driver2.execute("SELECT * FROM employees")

    print(
        "driver1 is driver2:",
        driver1 is driver2
    )


# ============================================================
# 3. CACHE DEMONSTRATION
# ============================================================

def demonstrate_cache() -> None:

    print("\n=== CACHE ===")

    cache1 = Cache()
    cache2 = Cache()

    cache1.set(
        "employee:101",
        "Employee 101 Data"
    )

    value = cache2.get("employee:101")

    print("Retrieved value:", value)

    print(
        "cache1 is cache2:",
        cache1 is cache2
    )


# ============================================================
# 4. THREAD POOL DEMONSTRATION
# ============================================================

def demonstrate_thread_pool() -> None:

    print("\n=== THREAD POOL ===")

    pool1 = ThreadPoolManager()
    pool2 = ThreadPoolManager()

    print(
        "pool1 is pool2:",
        pool1 is pool2
    )

    futures = []

    for task_id in range(1, 6):
        future = pool1.submit(
            execute_task,
            task_id
        )

        futures.append(future)

    wait(futures)


# ============================================================
# 5. THREAD SAFETY DEMONSTRATION
# ============================================================

def demonstrate_thread_safety() -> None:

    print("\n=== THREAD SAFETY ===")

    instances = []

    def get_logger():
        logger = Logger()
        instances.append(logger)

    threads = [
        Thread(target=get_logger)
        for _ in range(10)
    ]

    for thread in threads:
        thread.start()

    for thread in threads:
        thread.join()

    unique_instances = {
        id(instance)
        for instance in instances
    }

    print(
        "Number of Logger instances:",
        len(unique_instances)
    )


# ============================================================
# MAIN
# ============================================================

def main() -> None:

    demonstrate_logging()

    demonstrate_driver()

    demonstrate_cache()

    demonstrate_thread_pool()

    demonstrate_thread_safety()

    ThreadPoolManager().shutdown()


if __name__ == "__main__":
    main()