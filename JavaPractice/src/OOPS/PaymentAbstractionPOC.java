package OOPS;


// ==================================================
// ABSTRACT PARENT CLASS
// ==================================================

abstract class AbstractPayment {

    // ----------------------------------------------
    // COMMON DATA
    // ----------------------------------------------

    String transactionId;
    double amount;


    // ----------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------

    public AbstractPayment(
            String transactionId,
            double amount
    ) {

        this.transactionId = transactionId;
        this.amount = amount;
    }


    // ----------------------------------------------
    // CONCRETE METHOD
    // ----------------------------------------------

    public void showPaymentDetails() {

        System.out.println(
                "Transaction ID: " + transactionId
        );

        System.out.println(
                "Amount: " + amount
        );
    }


    // ----------------------------------------------
    // ABSTRACT METHOD
    // ----------------------------------------------

    public abstract void makePayment();
}


// ==================================================
// UPI PAYMENT
// ==================================================

class AbstractUPIPayment extends AbstractPayment {

    String upiId;


    public AbstractUPIPayment(
            String transactionId,
            double amount,
            String upiId
    ) {

        super(transactionId, amount);

        this.upiId = upiId;
    }


    @Override
    public void makePayment() {

        System.out.println(
                "Processing UPI payment using "
                        + upiId
        );

        System.out.println(
                "UPI payment successful."
        );
    }
}


// ==================================================
// CREDIT CARD PAYMENT
// ==================================================

class AbstractCreditCardPayment
        extends AbstractPayment {

    String cardNumber;


    public AbstractCreditCardPayment(
            String transactionId,
            double amount,
            String cardNumber
    ) {

        super(transactionId, amount);

        this.cardNumber = cardNumber;
    }


    @Override
    public void makePayment() {

        System.out.println(
                "Processing credit card payment."
        );

        System.out.println(
                "Credit card payment successful."
        );
    }
}


// ==================================================
// NET BANKING PAYMENT
// ==================================================

class AbstractNetBankingPayment
        extends AbstractPayment {

    String bankName;


    public AbstractNetBankingPayment(
            String transactionId,
            double amount,
            String bankName
    ) {

        super(transactionId, amount);

        this.bankName = bankName;
    }


    @Override
    public void makePayment() {

        System.out.println(
                "Processing net banking payment "
                        + "through " + bankName
        );

        System.out.println(
                "Net banking payment successful."
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class PaymentAbstractionPOC {

    public static void main(String[] args) {


        // ------------------------------------------
        // UPI PAYMENT
        // ------------------------------------------

        AbstractPayment upiPayment =
                new AbstractUPIPayment(
                        "TXN1001",
                        1500,
                        "alice@upi"
                );


        System.out.println(
                "===== UPI PAYMENT ====="
        );

        upiPayment.showPaymentDetails();

        upiPayment.makePayment();


        // ------------------------------------------
        // CREDIT CARD PAYMENT
        // ------------------------------------------

        System.out.println();

        AbstractPayment cardPayment =
                new AbstractCreditCardPayment(
                        "TXN1002",
                        2500,
                        "XXXX-XXXX-XXXX-1234"
                );


        System.out.println(
                "===== CREDIT CARD PAYMENT ====="
        );

        cardPayment.showPaymentDetails();

        cardPayment.makePayment();


        // ------------------------------------------
        // NET BANKING PAYMENT
        // ------------------------------------------

        System.out.println();

        AbstractPayment netBankingPayment =
                new AbstractNetBankingPayment(
                        "TXN1003",
                        5000,
                        "ABC Bank"
                );


        System.out.println(
                "===== NET BANKING PAYMENT ====="
        );

        netBankingPayment.showPaymentDetails();

        netBankingPayment.makePayment();


        // ------------------------------------------
        // ABSTRACT CLASS OBJECT
        // ------------------------------------------

        // This is NOT allowed:

        // AbstractPayment payment =
        //         new AbstractPayment();
    }
}