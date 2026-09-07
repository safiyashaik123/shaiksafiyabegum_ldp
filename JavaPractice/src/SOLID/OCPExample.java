package SOLID;

/*
==========================================================
        OPEN/CLOSED PRINCIPLE (OCP)
==========================================================

OCP says:

"A class should be open for extension
but closed for modification."



==========================================================
                WITHOUT OCP
==========================================================

Here, PaymentService uses if-else conditions
for every payment type.

If we add a new payment type, we must modify
the existing PaymentService class.

*/


// class PaymentService {
//
//     void processPayment(String paymentType) {
//
//         if (paymentType.equals("UPI")) {
//
//             System.out.println("Payment through UPI");
//
//         } else if (paymentType.equals("CARD")) {
//
//             System.out.println("Payment through Card");
//         }
//     }
// }


/*
==========================================================
                    WITH OCP
==========================================================

We create an abstraction called Payment.

PaymentService depends on Payment instead of
directly depending on UPI, Card, etc.

Now we can add new payment types by creating
new classes without modifying PaymentService.
*/


// Abstraction

interface Payment {

    void pay();
}


// UPI payment implementation

class UpiPayment implements Payment {

    @Override
    public void pay() {

        System.out.println("Payment through UPI");
    }
}


// Card payment implementation

class CardPayment implements Payment {

    @Override
    public void pay() {

        System.out.println("Payment through Card");
    }
}


// PayPal payment implementation

class PaypalPayment implements Payment {

    @Override
    public void pay() {

        System.out.println("Payment through PayPal");
    }
}


// PaymentService is closed for modification.
// It works with the Payment abstraction.

class PaymentService {

    void processPayment(Payment payment) {

        payment.pay();
    }
}


// Main class

public class OCPExample {

    public static void main(String[] args) {

        PaymentService paymentService =
                new PaymentService();


        // UPI payment

        Payment upiPayment =
                new UpiPayment();

        paymentService.processPayment(upiPayment);


        // Card payment

        Payment cardPayment =
                new CardPayment();

        paymentService.processPayment(cardPayment);


        // PayPal payment

        Payment paypalPayment =
                new PaypalPayment();

        paymentService.processPayment(paypalPayment);
    }
}