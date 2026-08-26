from abc import ABC, abstractmethod

from order_factory import register_order


# ============================================================
# ORDER ABSTRACTION
# ============================================================

class Order(ABC):

    @abstractmethod
    def process(self) -> None:
        pass


# ============================================================
# FOOD ORDER
# ============================================================

@register_order("food")
class FoodOrder(Order):

    def process(self) -> None:
        print("Processing food order...")


# ============================================================
# CLOTHING ORDER
# ============================================================

@register_order("clothing")
class ClothingOrder(Order):

    def process(self) -> None:
        print("Processing clothing order...")


# ============================================================
# ELECTRONICS ORDER
# ============================================================

@register_order("electronics")
class ElectronicsOrder(Order):

    def process(self) -> None:
        print("Processing electronics order...")


# ============================================================
# BOOK ORDER
# ============================================================

@register_order("book")
class BookOrder(Order):

    def process(self) -> None:
        print("Processing book order...")