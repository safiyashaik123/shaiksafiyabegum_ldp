from typing import Callable, TypeVar


# ============================================================
# TYPE DEFINITIONS
# ============================================================

T = TypeVar("T")


# ============================================================
# ORDER REGISTRY
# ============================================================

class OrderRegistry:

    _orders: dict[str, Callable[[], object]] = {}

    @classmethod
    def register(
        cls,
        order_type: str,
        creator: Callable[[], object]
    ) -> None:

        key = order_type.lower()

        if key in cls._orders:
            raise ValueError(
                f"Order type '{order_type}' is already registered."
            )

        cls._orders[key] = creator

    @classmethod
    def create(cls, order_type: str):

        key = order_type.lower()

        creator = cls._orders.get(key)

        if creator is None:
            raise ValueError(
                f"Unsupported order type: {order_type}"
            )

        return creator()

    @classmethod
    def available_orders(cls) -> list[str]:

        return sorted(cls._orders.keys())


# ============================================================
# REGISTRATION DECORATOR
# ============================================================

def register_order(order_type: str):

    def decorator(order_class: type[T]) -> type[T]:

        OrderRegistry.register(
            order_type,
            order_class
        )

        return order_class

    return decorator


# ============================================================
# ONLINE ORDER PROCESSING FACTORY
# ============================================================

class OnlineOrderProcessingFactory:

    def create_order(self, order_type: str):

        return OrderRegistry.create(order_type)

    def available_order_types(self) -> list[str]:

        return OrderRegistry.available_orders()