package Assignments;



/*
==========================================================
                WITHOUT SOLID
==========================================================

The following is an example of poor design.

One class is responsible for:

1. Order data
2. Payment
3. Notification
4. Saving order
5. Report generation

This gives the class multiple reasons to change.

*/

// class Order {
//
//     void createOrder() {
//         // order logic
//     }
//
//     void makePayment(String paymentType) {
//
//         if (paymentType.equals("UPI")) {
//             // UPI payment
//         }
//         else if (paymentType.equals("CARD")) {
//             // Card payment
//         }
//     }
//
//     void sendEmail() {
//         // email logic
//     }
//
//     void saveToDatabase() {
//         // database logic
//     }
//
//     void generateReport() {
//         // report logic
//     }
// }


/*
==========================================================
                    WITH SOLID
==========================================================

We separate the responsibilities.

Order
    -> Stores order information

OrderRepository
    -> Saves order

Payment
    -> Payment abstraction

UpiPayment
    -> UPI payment

CardPayment
    -> Card payment

Notification
    -> Notification abstraction

EmailNotification
    -> Email notification

SmsNotification
    -> SMS notification

OrderReport
    -> Generates order report

OrderService
    -> Handles order processing
*/


/*
==========================================================
S - SINGLE RESPONSIBILITY PRINCIPLE
==========================================================

Order is responsible only for storing order information.
*/

class Order {

    private int orderId;
    private String customerName;
    private double amount;

    Order(
            int orderId,
            String customerName,
            double amount
    ) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.amount = amount;
    }

    public int getOrderId() {
        return orderId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public double getAmount() {
        return amount;
    }
}


/*
==========================================================
S - SINGLE RESPONSIBILITY

OrderRepository is responsible only for
saving the order.
*/

interface OrderRepository {

    void save(Order order);
}


class DatabaseOrderRepository
        implements OrderRepository {

    @Override
    public void save(Order order) {

        System.out.println(
                "Order " +
                        order.getOrderId() +
                        " saved to database."
        );
    }
}


/*
==========================================================
I - INTERFACE SEGREGATION
==========================================================

Payment and Notification are kept as separate
focused interfaces.

A payment implementation is not forced to
implement notification methods.
*/


/*
==========================================================
O - OPEN/CLOSED
L - LISKOV SUBSTITUTION
D - DEPENDENCY INVERSION
==========================================================

Payment is an abstraction.

New payment types can be added by implementing
this interface without modifying OrderService.
*/

interface Payment {

    void pay(double amount);
}


/*
----------------------------------------------------------
UPI PAYMENT
----------------------------------------------------------
*/

class UpiPayment implements Payment {

    @Override
    public void pay(double amount) {

        System.out.println(
                "Payment of ₹" +
                        amount +
                        " completed through UPI."
        );
    }
}


/*
----------------------------------------------------------
CARD PAYMENT
----------------------------------------------------------
*/

class CardPayment implements Payment {

    @Override
    public void pay(double amount) {

        System.out.println(
                "Payment of ₹" +
                        amount +
                        " completed through Card."
        );
    }
}


/*
----------------------------------------------------------
NEW PAYMENT TYPE
----------------------------------------------------------

This demonstrates OCP.

We added a new payment method without modifying
Payment or OrderService.
*/

class NetBankingPayment implements Payment {

    @Override
    public void pay(double amount) {

        System.out.println(
                "Payment of ₹" +
                        amount +
                        " completed through Net Banking."
        );
    }
}


/*
==========================================================
L - LISKOV SUBSTITUTION PRINCIPLE
==========================================================

All classes implementing Payment can be used
wherever Payment is expected.

For example:

Payment payment = new UpiPayment();
Payment payment = new CardPayment();
Payment payment = new NetBankingPayment();

The OrderService can work with all of them.
*/


/*
==========================================================
I - INTERFACE SEGREGATION
==========================================================

Notification is a separate interface.

Payment classes don't need to implement notification
methods.
*/

interface Notification {

    void send(String message);
}


/*
----------------------------------------------------------
EMAIL NOTIFICATION
----------------------------------------------------------
*/

class EmailNotification
        implements Notification {

    @Override
    public void send(String message) {

        System.out.println(
                "Email notification: " +
                        message
        );
    }
}


/*
----------------------------------------------------------
SMS NOTIFICATION
----------------------------------------------------------
*/

class SmsNotification
        implements Notification {

    @Override
    public void send(String message) {

        System.out.println(
                "SMS notification: " +
                        message
        );
    }
}


/*
==========================================================
S - SINGLE RESPONSIBILITY
==========================================================

OrderReport is responsible only for generating
the order report.
*/

class OrderReport {

    void generate(Order order) {

        System.out.println();
        System.out.println("Order Report");
        System.out.println("------------");
        System.out.println(
                "Order ID: " +
                        order.getOrderId()
        );
        System.out.println(
                "Customer: " +
                        order.getCustomerName()
        );
        System.out.println(
                "Amount: ₹" +
                        order.getAmount()
        );
    }
}


/*
==========================================================
D - DEPENDENCY INVERSION PRINCIPLE
==========================================================

OrderService is the high-level module.

It does NOT directly create:

    new UpiPayment()
    new CardPayment()
    new EmailNotification()
    new SmsNotification()

Instead, it depends on abstractions:

    Payment
    Notification
    OrderRepository
*/

class OrderService {

    private Payment payment;
    private Notification notification;
    private OrderRepository orderRepository;


    /*
    ------------------------------------------------------
    Constructor Injection
    ------------------------------------------------------

    Dependencies are provided from outside.
    */

    OrderService(
            Payment payment,
            Notification notification,
            OrderRepository orderRepository
    ) {

        this.payment = payment;
        this.notification = notification;
        this.orderRepository = orderRepository;
    }


    void processOrder(Order order) {

        System.out.println(
                "Processing order " +
                        order.getOrderId()
        );


        // Payment

        payment.pay(order.getAmount());


        // Save order

        orderRepository.save(order);


        // Notification

        notification.send(
                "Your order " +
                        order.getOrderId() +
                        " has been processed successfully."
        );
    }
}


/*
==========================================================
                        MAIN
==========================================================
*/

public class SOLIDAssignment {

    public static void main(String[] args) {

        /*
        --------------------------------------------------
        Create Order
        --------------------------------------------------
        */

        Order order =
                new Order(
                        1001,
                        "Safiya",
                        2500
                );


        /*
        --------------------------------------------------
        Create dependencies
        --------------------------------------------------
        */

        Payment payment =
                new UpiPayment();

        Notification notification =
                new EmailNotification();

        OrderRepository repository =
                new DatabaseOrderRepository();


        /*
        --------------------------------------------------
        Dependency Injection

        We provide the dependencies to OrderService.
        --------------------------------------------------
        */

        OrderService orderService =
                new OrderService(
                        payment,
                        notification,
                        repository
                );


        /*
        --------------------------------------------------
        Process Order
        --------------------------------------------------
        */

        orderService.processOrder(order);


        /*
        --------------------------------------------------
        Generate Report
        --------------------------------------------------
        */

        OrderReport report =
                new OrderReport();

        report.generate(order);


        /*
        ==================================================
        Demonstrating POLYMORPHISM / LSP
        ==================================================

        Payment reference can point to different
        Payment implementations.
        */

        System.out.println();
        System.out.println("Changing payment method...");


        Payment cardPayment =
                new CardPayment();

        OrderService cardOrderService =
                new OrderService(
                        cardPayment,
                        notification,
                        repository
                );

        cardOrderService.processOrder(order);


        /*
        ==================================================
        Demonstrating OCP
        ==================================================

        NetBankingPayment is a new extension.

        OrderService was NOT modified.
        */

        System.out.println();
        System.out.println(
                "Using new payment method..."
        );


        Payment netBankingPayment =
                new NetBankingPayment();

        OrderService netBankingOrderService =
                new OrderService(
                        netBankingPayment,
                        notification,
                        repository
                );

        netBankingOrderService.processOrder(order);
    }
}