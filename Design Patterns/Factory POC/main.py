from products import (
    EmailNotification,
    SMSNotification,
    PushNotification,
    WhatsAppNotification,
)

from factories import (
    NotificationFactory,
    EmailNotificationCreator,
    SMSNotificationCreator,
    PushNotificationCreator,
    AWSFactory,
    AzureFactory,
    NotificationRegistryFactory,
    NotificationDependencyFactory,
)


def print_header(title: str) -> None:
    print("\n")
    print("=" * 60)
    print(title)
    print("=" * 60)


# ============================================================
# 1. WITHOUT FACTORY
# ============================================================

def demonstrate_without_factory() -> None:

    print_header("1. WITHOUT FACTORY")

    print("Client directly creates concrete classes.")

    email = EmailNotification()
    sms = SMSNotification()

    print("\nEmail object:")
    email.send("Employee account created")

    print("\nSMS object:")
    sms.send("Employee account created")


# ============================================================
# 2. SIMPLE FACTORY
# ============================================================

def demonstrate_simple_factory() -> None:

    print_header("2. SIMPLE FACTORY")

    notification_types = [
        "email",
        "sms",
        "push",
        "whatsapp",
    ]

    for notification_type in notification_types:

        print(
            f"\nRequested type: "
            f"{notification_type}"
        )

        notification = NotificationFactory.create(
            notification_type
        )

        print(
            f"Factory created: "
            f"{notification.__class__.__name__}"
        )

        notification.send(
            "New employee registered"
        )


# ============================================================
# 3. ERROR HANDLING
# ============================================================

def demonstrate_error_handling() -> None:

    print_header("3. ERROR HANDLING")

    invalid_types = [
        "telegram",
        "discord",
        None,
    ]

    for notification_type in invalid_types:

        print(
            f"\nRequested type: "
            f"{notification_type}"
        )

        try:

            notification = NotificationFactory.create(
                notification_type
            )

            notification.send("Test message")

        except ValueError as error:

            print(f"ERROR: {error}")


# ============================================================
# 4. FACTORY METHOD
# ============================================================

def demonstrate_factory_method() -> None:

    print_header("4. FACTORY METHOD")

    creators = [
        EmailNotificationCreator(),
        SMSNotificationCreator(),
        PushNotificationCreator(),
    ]

    for creator in creators:

        print(
            f"\nConcrete Creator: "
            f"{creator.__class__.__name__}"
        )

        print(
            "Calling Factory Method: "
            "create_notification()"
        )

        creator.send_notification(
            "Factory Method notification"
        )


# ============================================================
# 5. ABSTRACT FACTORY
# ============================================================

def demonstrate_abstract_factory() -> None:

    print_header("5. ABSTRACT FACTORY")

    cloud_factories = [
        AWSFactory(),
        AzureFactory(),
    ]

    for factory in cloud_factories:

        print(
            f"\nConcrete Factory: "
            f"{factory.__class__.__name__}"
        )

        storage = factory.create_storage()
        database = factory.create_database()

        print(
            f"Storage Product: "
            f"{storage.__class__.__name__}"
        )

        print(
            f"Database Product: "
            f"{database.__class__.__name__}"
        )

        storage.store("Employee data")
        database.save("Employee data")


# ============================================================
# 6. REGISTRY FACTORY
# ============================================================

def demonstrate_registry() -> None:

    print_header("6. REGISTRY-BASED FACTORY")

    # Initial registrations

    NotificationRegistryFactory.register(
        "email",
        EmailNotification,
    )

    NotificationRegistryFactory.register(
        "sms",
        SMSNotification,
    )

    NotificationRegistryFactory.register(
        "push",
        PushNotification,
    )

    print(
        "Initially supported types:"
    )

    print(
        NotificationRegistryFactory.supported_types()
    )

    notification = NotificationRegistryFactory.create(
        "email"
    )

    print(
        f"\nCreated: "
        f"{notification.__class__.__name__}"
    )

    notification.send(
        "Registry based notification"
    )


# ============================================================
# 7. EXTENSIBILITY
# ============================================================

def demonstrate_extensibility() -> None:

    print_header("7. EXTENSIBILITY")

    print(
        "Before registering WhatsApp:"
    )

    print(
        NotificationRegistryFactory.supported_types()
    )

    print(
        "\nRegistering new product:"
        " WhatsAppNotification"
    )

    NotificationRegistryFactory.register(
        "whatsapp",
        WhatsAppNotification,
    )

    print(
        "\nAfter registering WhatsApp:"
    )

    print(
        NotificationRegistryFactory.supported_types()
    )

    notification = NotificationRegistryFactory.create(
        "whatsapp"
    )

    print(
        f"\nCreated: "
        f"{notification.__class__.__name__}"
    )

    notification.send(
        "WhatsApp notification"
    )


# ============================================================
# 8. DEPENDENCY INJECTION
# ============================================================

def demonstrate_dependency_injection() -> None:

    print_header("8. DEPENDENCY INJECTION")

    print(
        "Factory is responsible for creating:"
    )

    print("  - EmailGateway")
    print("  - NotificationLogger")

    print(
        "\nFactory creates and injects them "
        "into EmailNotification."
    )

    notification = (
        NotificationDependencyFactory
        .create_email_notification()
    )

    print(
        f"\nCreated: "
        f"{notification.__class__.__name__}"
    )

    notification.send(
        "Dependency injection example"
    )


# ============================================================
# MAIN
# ============================================================

if __name__ == "__main__":

    print_header("FACTORY PATTERN HIGH-LEVEL POC")

    demonstrate_without_factory()

    demonstrate_simple_factory()

    demonstrate_error_handling()

    demonstrate_factory_method()

    demonstrate_abstract_factory()

    demonstrate_registry()

    demonstrate_extensibility()

    # demonstrate_dependency_injection()

    print_header("FACTORY POC COMPLETED")