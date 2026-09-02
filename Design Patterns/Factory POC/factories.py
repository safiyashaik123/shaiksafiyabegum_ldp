from abc import ABC, abstractmethod
from typing import Type

from products import (
    Notification,
    EmailNotification,
    SMSNotification,
    PushNotification,
    WhatsAppNotification,
    EmailGateway,
    NotificationLogger,
    Storage,
    Database,
    AWSStorage,
    AWSDatabase,
    AzureStorage,
    AzureDatabase,
)


# ============================================================
# 1. SIMPLE FACTORY
# ============================================================

class NotificationFactory:

    @staticmethod
    def create(notification_type: str) -> Notification:

        if not notification_type:
            raise ValueError(
                "Notification type is required"
            )

        if notification_type == "email":
            return EmailNotification()

        if notification_type == "sms":
            return SMSNotification()

        if notification_type == "push":
            return PushNotification()

        if notification_type == "whatsapp":
            return WhatsAppNotification()

        raise ValueError(
            f"Unsupported notification type: "
            f"{notification_type}"
        )


# ============================================================
# 2. FACTORY METHOD
# ============================================================

class NotificationCreator(ABC):

    @abstractmethod
    def create_notification(self) -> Notification:
        pass

    def send_notification(self, message: str) -> None:
        notification = self.create_notification()

        print(
            f"Created Product: "
            f"{notification.__class__.__name__}"
        )

        notification.send(message)


class EmailNotificationCreator(NotificationCreator):

    def create_notification(self) -> Notification:
        return EmailNotification()


class SMSNotificationCreator(NotificationCreator):

    def create_notification(self) -> Notification:
        return SMSNotification()


class PushNotificationCreator(NotificationCreator):

    def create_notification(self) -> Notification:
        return PushNotification()


# ============================================================
# 3. ABSTRACT FACTORY
# ============================================================

class CloudFactory(ABC):

    @abstractmethod
    def create_storage(self) -> Storage:
        pass

    @abstractmethod
    def create_database(self) -> Database:
        pass


class AWSFactory(CloudFactory):

    def create_storage(self) -> Storage:
        return AWSStorage()

    def create_database(self) -> Database:
        return AWSDatabase()


class AzureFactory(CloudFactory):

    def create_storage(self) -> Storage:
        return AzureStorage()

    def create_database(self) -> Database:
        return AzureDatabase()


# ============================================================
# 4. REGISTRY-BASED FACTORY
# ============================================================

class NotificationRegistryFactory:

    _registry: dict[
        str,
        Type[Notification]
    ] = {}

    @classmethod
    def register(
        cls,
        name: str,
        notification_class: Type[Notification]
    ) -> None:

        cls._registry[name] = notification_class

    @classmethod
    def create(
        cls,
        name: str
    ) -> Notification:

        if not name:
            raise ValueError(
                "Notification type is required"
            )

        notification_class = cls._registry.get(name)

        if notification_class is None:
            raise ValueError(
                f"Unsupported notification type: {name}"
            )

        return notification_class()

    @classmethod
    def supported_types(cls) -> list[str]:
        return list(cls._registry.keys())


# ============================================================
# 5. DEPENDENCY-INJECTION FACTORY
# ============================================================

class NotificationDependencyFactory:

    @staticmethod
    def create_email_notification() -> Notification:

        gateway = EmailGateway()
        logger = NotificationLogger()

        return EmailNotification(
            gateway=gateway,
            logger=logger,
        )