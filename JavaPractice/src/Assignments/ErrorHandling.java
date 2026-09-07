package Assignments;

// First custom exception
class InvalidAgeException extends Exception {

    InvalidAgeException(String message) {
        super(message);
    }
}

// Second custom exception
class InvalidNameException extends Exception {

    InvalidNameException(String message) {
        super(message);
    }
}

// Third custom exception
class InvalidAmountException extends Exception {

    InvalidAmountException(String message) {
        super(message);
    }
}


public class ErrorHandling {

    // Method that can throw all three exceptions
    static void validateUser(int age, String name, double amount)
            throws InvalidAgeException,
            InvalidNameException,
            InvalidAmountException {

        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }

        if (name == null || name.isEmpty()) {
            throw new InvalidNameException("Name cannot be empty");
        }

        if (amount <= 0) {
            throw new InvalidAmountException("Amount must be greater than zero");
        }

        System.out.println("User details are valid");
    }


    public static void main(String[] args) {

        try {

            // Change these values to test different exceptions
            int age = 15;
            String name = "John";
            double amount = 1000;

            validateUser(age, name, amount);

        }
        catch (InvalidAgeException |
               InvalidNameException |
               InvalidAmountException e) {

            // Single catch handles all three exceptions
            System.out.println("Exception: " + e.getMessage());
        }
        finally {

            // This block always executes
            System.out.println("Finally block executed");
        }


        // Verify finally even when NullPointerException occurs
        try {

            String value = null;

            System.out.println(value.length());

        }
        catch (NullPointerException e) {

            System.out.println("NullPointerException caught");
        }
        finally {

            System.out.println(
                    "Finally block executed after NullPointerException"
            );
        }
    }
}