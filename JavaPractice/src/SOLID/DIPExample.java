package SOLID;

/*
==========================================================
        DEPENDENCY INVERSION PRINCIPLE (DIP)
==========================================================

DIP says:

"High-level modules should not depend on low-level
modules. Both should depend on abstractions."



==========================================================
                WITHOUT DIP
==========================================================

OrderService directly creates and depends on
EmailService.

Dependency:

    OrderService
          |
          ↓
    EmailService

Problem:

If we want to use SMS instead of Email, we need
to modify OrderService.

Therefore, OrderService is tightly coupled
to EmailService.
*/


// class EmailService {
//
//     void sendEmail(String message) {
//
//         System.out.println(
//                 "Sending Email: " + message
//         );
//     }
// }
//
//
// class OrderService {
//
//     private EmailService emailService =
//             new EmailService();
//
//     void placeOrder() {
//
//         System.out.println("Order placed");
//
//         emailService.sendEmail(
//                 "Your order has been placed"
//         );
//     }
// }


/*
==========================================================
                    WITH DIP
==========================================================

Instead of OrderService depending directly on
EmailService, we create an abstraction.


*/


/*
----------------------------------------------------------
Abstraction
----------------------------------------------------------

This interface defines WHAT a notification service
should do.

It does not define HOW the notification is sent.
*/

interface NotificationService {

    void send(String message);
}


/*
----------------------------------------------------------
Low-level implementation 1
----------------------------------------------------------

EmailService provides the actual implementation
of sending an email.
*/

class EmailService implements NotificationService {

    @Override
    public void send(String message) {

        System.out.println(
                "Sending Email: " + message
        );
    }
}


/*
----------------------------------------------------------
Low-level implementation 2
----------------------------------------------------------

SmsService provides another implementation
of NotificationService.
*/

class SmsService implements NotificationService {

    @Override
    public void send(String message) {

        System.out.println(
                "Sending SMS: " + message
        );
    }
}


/*
----------------------------------------------------------
High-level module
----------------------------------------------------------

OrderService contains the business logic.

Notice:

It does NOT create EmailService.

It depends on the NotificationService interface.
*/

class OrderService {

    private NotificationService notificationService;


    /*
    ------------------------------------------------------
    Constructor Injection

    The dependency is provided from outside.
    ------------------------------------------------------
    */

    OrderService(
            NotificationService notificationService
    ) {

        this.notificationService =
                notificationService;
    }


    void placeOrder() {

        System.out.println("Order placed");

        notificationService.send(
                "Your order has been placed"
        );
    }
}


/*
==========================================================
                        MAIN
==========================================================
*/

public class DIPExample {

    public static void main(String[] args) {


        /*
        --------------------------------------------------
        Using Email
        --------------------------------------------------
        */

        NotificationService emailService =
                new EmailService();

        OrderService emailOrderService =
                new OrderService(emailService);

        emailOrderService.placeOrder();


        System.out.println();


        /*
        --------------------------------------------------
        Using SMS
        --------------------------------------------------
        */

        NotificationService smsService =
                new SmsService();

        OrderService smsOrderService =
                new OrderService(smsService);

        smsOrderService.placeOrder();
    }
}