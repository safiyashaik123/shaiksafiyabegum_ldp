package Exceptions;


// ==================================================
// CUSTOM EXCEPTION - INVALID EMPLOYEE ID
// ==================================================

class InvalidEmployeeIdException
        extends Exception {

    public InvalidEmployeeIdException(
            String message
    ) {

        super(message);
    }
}


// ==================================================
// CUSTOM EXCEPTION - INVALID SALARY
// ==================================================

class InvalidSalaryException
        extends Exception {

    public InvalidSalaryException(
            String message
    ) {

        super(message);
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeeCustomExceptionPOC {


    // ==================================================
    // VALIDATE EMPLOYEE ID
    // ==================================================

    public static void validateEmployeeId(
            int employeeId
    ) throws InvalidEmployeeIdException {

        if (employeeId <= 0) {

            throw new InvalidEmployeeIdException(
                    "Employee ID must be greater than zero."
            );
        }

        System.out.println(
                "Employee ID is valid: "
                        + employeeId
        );
    }


    // ==================================================
    // VALIDATE SALARY
    // ==================================================

    public static void validateSalary(
            double salary
    ) throws InvalidSalaryException {

        if (salary < 10000) {

            throw new InvalidSalaryException(
                    "Salary must be at least ₹10,000."
            );
        }

        System.out.println(
                "Salary is valid: ₹"
                        + salary
        );
    }


    // ==================================================
    // MAIN METHOD
    // ==================================================

    public static void main(String[] args) {


        // ==================================================
        // VALID EMPLOYEE ID
        // ==================================================

        System.out.println(
                "===== EMPLOYEE ID VALIDATION ====="
        );

        try {

            validateEmployeeId(101);

        } catch (InvalidEmployeeIdException e) {

            System.out.println(
                    "Employee ID Error: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // INVALID EMPLOYEE ID
        // ==================================================

        try {

            validateEmployeeId(-5);

        } catch (InvalidEmployeeIdException e) {

            System.out.println(
                    "Employee ID Error: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // VALID SALARY
        // ==================================================

        System.out.println();

        System.out.println(
                "===== SALARY VALIDATION ====="
        );

        try {

            validateSalary(50000);

        } catch (InvalidSalaryException e) {

            System.out.println(
                    "Salary Error: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // INVALID SALARY
        // ==================================================

        try {

            validateSalary(5000);

        } catch (InvalidSalaryException e) {

            System.out.println(
                    "Salary Error: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // PROGRAM CONTINUES
        // ==================================================

        System.out.println();

        System.out.println(
                "===== APPLICATION CONTINUED ====="
        );

        System.out.println(
                "Employee registration process continues."
        );
    }
}