from abc import ABC, abstractmethod


# ============================================================
# NOTIFICATION PRODUCTS
# ============================================================

class Notification(ABC):

    @abstractmethod
    def send(self, message: str) -> None:
        pass


class EmailNotification(Notification):

    def __init__(self, gateway=None, logger=None):
        self.gateway = gateway
        self.logger = logger

    def send(self, message: str) -> None:
        if self.gateway:
            self.gateway.send(message)

        else:
            print(f"EMAIL: {message}")

        if self.logger:
            self.logger.log("Email notification sent")


class SMSNotification(Notification):

    def send(self, message: str) -> None:
        print(f"SMS: {message}")


class PushNotification(Notification):

    def send(self, message: str) -> None:
        print(f"PUSH: {message}")


class WhatsAppNotification(Notification):

    def send(self, message: str) -> None:
        print(f"WHATSAPP: {message}")


# ============================================================
# DEPENDENCIES
# ============================================================

class EmailGateway:

    def send(self, message: str) -> None:
        print(f"EmailGateway → {message}")


class NotificationLogger:

    def log(self, message: str) -> None:
        print(f"Logger → {message}")


# ============================================================
# ABSTRACT FACTORY PRODUCTS
# ============================================================

class Storage(ABC):

    @abstractmethod
    def store(self, data: str) -> None:
        pass


class Database(ABC):

    @abstractmethod
    def save(self, data: str) -> None:
        pass


# ============================================================
# AWS PRODUCTS
# ============================================================

class AWSStorage(Storage):

    def store(self, data: str) -> None:
        print(f"AWS Storage → storing: {data}")


class AWSDatabase(Database):

    def save(self, data: str) -> None:
        print(f"AWS Database → saving: {data}")


# ============================================================
# AZURE PRODUCTS
# ============================================================

class AzureStorage(Storage):

    def store(self, data: str) -> None:
        print(f"Azure Storage → storing: {data}")


class AzureDatabase(Database):

    def save(self, data: str) -> None:
        print(f"Azure Database → saving: {data}")