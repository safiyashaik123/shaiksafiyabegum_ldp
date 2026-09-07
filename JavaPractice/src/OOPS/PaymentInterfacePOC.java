package OOPS;


// ==================================================
// PAYMENT INTERFACE
// ==================================================
// Defines what every payment method must do.
// ==================================================

interface PaymentMethod {

    void makePayment(double amount);
}


// ==================================================
// REFUND INTERFACE
// ==================================================
// Defines what a refundable payment must do.
// ==================================================

interface Refundable {

    void refundPayment(double amount);
}


// ==================================================
// UPI PAYMENT
// ==================================================

class InterfacePOCUPIPayment
        implements PaymentMethod, Refundable {

    private String upiId;


    // ----------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------

    public InterfacePOCUPIPayment(String upiId) {

        this.upiId = upiId;
    }


    // ----------------------------------------------
    // IMPLEMENT PAYMENT METHOD
    // ----------------------------------------------

    @Override
    public void makePayment(double amount) {

        if (amount <= 0) {

            System.out.println(
                    "UPI payment amount must be greater than zero."
            );

            return;
        }

        System.out.println(
                "UPI payment of ₹"
                        + amount
                        + " processed using "
                        + upiId
        );
    }


    // ----------------------------------------------
    // IMPLEMENT REFUNDABLE
    // ----------------------------------------------

    @Override
    public void refundPayment(double amount) {

        if (amount <= 0) {

            System.out.println(
                    "Refund amount must be greater than zero."
            );

            return;
        }

        System.out.println(
                "UPI refund of ₹"
                        + amount
                        + " processed."
        );
    }
}


// ==================================================
// CREDIT CARD PAYMENT
// ==================================================

class InterfacePOCCardPayment
        implements PaymentMethod, Refundable {

    private String cardNumber;


    // ----------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------

    public InterfacePOCCardPayment(
            String cardNumber
    ) {

        this.cardNumber = cardNumber;
    }


    // ----------------------------------------------
    // IMPLEMENT PAYMENT METHOD
    // ----------------------------------------------

    @Override
    public void makePayment(double amount) {

        if (amount <= 0) {

            System.out.println(
                    "Card payment amount must be greater than zero."
            );

            return;
        }

        String lastFourDigits =
                cardNumber.substring(
                        cardNumber.length() - 4
                );

        System.out.println(
                "Card payment of ₹"
                        + amount
                        + " processed using card ending "
                        + lastFourDigits
        );
    }


    // ----------------------------------------------
    // IMPLEMENT REFUNDABLE
    // ----------------------------------------------

    @Override
    public void refundPayment(double amount) {

        if (amount <= 0) {

            System.out.println(
                    "Refund amount must be greater than zero."
            );

            return;
        }

        System.out.println(
                "Card refund of ₹"
                        + amount
                        + " processed."
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class PaymentInterfacePOC {

    public static void main(String[] args) {


        // ==================================================
        // 1. INTERFACE REFERENCE
        // ==================================================

        System.out.println(
                "===== PAYMENT USING INTERFACE ====="
        );


        PaymentMethod payment;


        // Interface reference pointing to UPI object

        payment =
                new InterfacePOCUPIPayment(
                        "alice@upi"
                );


        payment.makePayment(1500);


        // Same interface reference
        // pointing to Card object

        payment =
                new InterfacePOCCardPayment(
                        "1234567890123456"
                );


        payment.makePayment(2500);


        // ==================================================
        // 2. DIFFERENT IMPLEMENTATIONS
        // ==================================================

        System.out.println();

        System.out.println(
                "===== DIFFERENT IMPLEMENTATIONS ====="
        );


        PaymentMethod upiPayment =
                new InterfacePOCUPIPayment(
                        "bob@upi"
                );


        PaymentMethod cardPayment =
                new InterfacePOCCardPayment(
                        "9876543210987654"
                );


        upiPayment.makePayment(1000);

        cardPayment.makePayment(3000);


        // ==================================================
        // 3. MULTIPLE INTERFACES
        // ==================================================

        System.out.println();

        System.out.println(
                "===== MULTIPLE INTERFACES ====="
        );


        InterfacePOCUPIPayment upi =
                new InterfacePOCUPIPayment(
                        "customer@upi"
                );


        // PaymentMethod functionality

        upi.makePayment(5000);


        // Refundable functionality

        upi.refundPayment(2000);


        // ==================================================
        // 4. CARD PAYMENT + REFUND
        // ==================================================

        System.out.println();

        InterfacePOCCardPayment card =
                new InterfacePOCCardPayment(
                        "1111222233334444"
                );


        card.makePayment(7000);

        card.refundPayment(3000);


        // ==================================================
        // 5. INVALID PAYMENT
        // ==================================================

        System.out.println();

        System.out.println(
                "===== INVALID PAYMENT ====="
        );


        PaymentMethod invalidPayment =
                new InterfacePOCUPIPayment(
                        "invalid@upi"
                );


        invalidPayment.makePayment(-500);
    }
}