from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from threading import Lock, current_thread
from typing import Any, Callable


# ============================================================
# THREAD-SAFE SINGLETON BASE
# ============================================================

class SingletonMeta(type):
    """
    Metaclass that ensures only one instance of each class
    using this metaclass can be created.
    """

    _instances: dict[type, Any] = {}
    _lock = Lock()

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            with cls._lock:
                if cls not in cls._instances:
                    cls._instances[cls] = super().__call__(
                        *args,
                        **kwargs
                    )

        return cls._instances[cls]


# ============================================================
# 1. LOGGER
# ============================================================

class Logger(metaclass=SingletonMeta):

    def __init__(self):
        self.logs: list[str] = []

    def log(self, message: str) -> None:
        self.logs.append(message)
        print(f"[LOG] {message}")


# ============================================================
# 2. DRIVER MANAGER
# ============================================================

class DriverManager(metaclass=SingletonMeta):

    def __init__(self):
        self.driver_name = "Database Driver"
        self.connected = False

    def connect(self) -> None:
        if not self.connected:
            self.connected = True
            print(f"{self.driver_name} connected.")

    def execute(self, query: str) -> None:
        if not self.connected:
            raise RuntimeError("Driver is not connected.")

        print(f"Executing query: {query}")


# ============================================================
# 3. CACHE
# ============================================================

class Cache(metaclass=SingletonMeta):

    def __init__(self):
        self._data: dict[str, Any] = {}

    def set(self, key: str, value: Any) -> None:
        self._data[key] = value

    def get(self, key: str) -> Any:
        return self._data.get(key)

    def clear(self) -> None:
        self._data.clear()


# ============================================================
# 4. THREAD POOL MANAGER
# ============================================================

class ThreadPoolManager(metaclass=SingletonMeta):

    def __init__(self):
        self._pool = ThreadPoolExecutor(max_workers=4)

    def submit(
        self,
        task: Callable,
        *args,
        **kwargs
    ):
        return self._pool.submit(task, *args, **kwargs)

    def shutdown(self) -> None:
        self._pool.shutdown()


# ============================================================
# TASK USED FOR THREAD POOL DEMONSTRATION
# ============================================================

def execute_task(task_id: int) -> str:
    thread_name = current_thread().name

    message = (
        f"Task {task_id} executed by {thread_name}"
    )

    print(message)

    return message