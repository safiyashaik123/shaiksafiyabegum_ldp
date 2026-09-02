from threading import Lock


class ApplicationResourceManager:
    """
    Thread-safe Singleton responsible for managing
    application-wide configuration, cache and state.
    """

    _instance = None
    _lock = Lock()

    def __new__(cls):
        # First check:
        # If the instance already exists, don't acquire the lock.
        if cls._instance is None:

            # Only one thread can enter this section at a time.
            with cls._lock:

                # Second check:
                # Another thread may have created the instance
                # while this thread was waiting for the lock.
                if cls._instance is None:
                    cls._instance = super().__new__(cls)

        return cls._instance

    def __init__(self):

        # __init__ can execute again even when __new__()
        # returns the existing Singleton object.
        if getattr(self, "_initialized", False):
            return

        # Application-wide configuration
        self.configuration = {
            "environment": "development",
            "currency": "INR",
            "payment_timeout": 30
        }

        # Shared application cache
        self.cache = {}

        # Shared application state
        self.application_state = {
            "active_orders": 0,
            "last_order": None
        }

        # Lock for protecting shared mutable resources
        self._state_lock = Lock()

        self._initialized = True

        print("ApplicationResourceManager initialized")

    # ==================================================
    # CONFIGURATION
    # ==================================================

    def get_config(self, key):
        return self.configuration.get(key)

    def set_config(self, key, value):
        self.configuration[key] = value

    # ==================================================
    # CACHE
    # ==================================================

    def set_cache(self, key, value):
        with self._state_lock:
            self.cache[key] = value

    def get_cache(self, key):
        with self._state_lock:
            return self.cache.get(key)

    # ==================================================
    # APPLICATION STATE
    # ==================================================

    def increment_orders(self):
        # Protect shared state from concurrent modifications.
        with self._state_lock:
            self.application_state["active_orders"] += 1

    def set_last_order(self, order_id):
        with self._state_lock:
            self.application_state["last_order"] = order_id

    def get_state(self, key):
        with self._state_lock:
            return self.application_state.get(key)