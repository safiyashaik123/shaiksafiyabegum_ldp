package Exceptions;

public class EmployeeExceptionHandlingPOC {

    public static void main(String[] args) {

        // ==================================================
        // 1. ARITHMETIC EXCEPTION
        // ==================================================

        System.out.println(
                "===== ARITHMETIC EXCEPTION ====="
        );

        try {

            int totalSalary = 50000;
            int employees = 0;

            int averageSalary =
                    totalSalary / employees;

            System.out.println(
                    "Average Salary: "
                            + averageSalary
            );

        } catch (ArithmeticException e) {

            System.out.println(
                    "Cannot calculate average salary: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 2. NUMBER FORMAT EXCEPTION
        // ==================================================

        System.out.println();

        System.out.println(
                "===== NUMBER FORMAT EXCEPTION ====="
        );

        try {

            String employeeIdInput = "EMP101";

            int employeeId =
                    Integer.parseInt(
                            employeeIdInput
                    );

            System.out.println(
                    "Employee ID: "
                            + employeeId
            );

        } catch (NumberFormatException e) {

            System.out.println(
                    "Invalid employee ID format."
            );
        }


        // ==================================================
        // 3. ARRAY INDEX EXCEPTION
        // ==================================================

        System.out.println();

        System.out.println(
                "===== ARRAY INDEX EXCEPTION ====="
        );

        try {

            String[] employees = {
                    "Alice",
                    "Bob",
                    "Charlie"
            };

            System.out.println(
                    "Employee: "
                            + employees[5]
            );

        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println(
                    "Employee index does not exist."
            );
        }


        // ==================================================
        // 4. FINALLY
        // ==================================================

        System.out.println();

        System.out.println(
                "===== FINALLY ====="
        );

        try {

            System.out.println(
                    "Processing employee data..."
            );

        } catch (Exception e) {

            System.out.println(
                    "Error while processing data."
            );

        } finally {

            System.out.println(
                    "Employee processing completed."
            );
        }


        // ==================================================
        // 5. THROW
        // ==================================================

        System.out.println();

        System.out.println(
                "===== THROW ====="
        );

        try {

            validateSalary(5000);

        } catch (IllegalArgumentException e) {

            System.out.println(
                    "Salary validation failed: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 6. VALID SALARY
        // ==================================================

        System.out.println();

        try {

            validateSalary(50000);

        } catch (IllegalArgumentException e) {

            System.out.println(
                    "Salary validation failed: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // PROGRAM CONTINUES
        // ==================================================

        System.out.println();

        System.out.println(
                "===== PROGRAM CONTINUED ====="
        );

        System.out.println(
                "Employee application is still running."
        );
    }


    // ==================================================
    // METHOD USING THROW
    // ==================================================

    public static void validateSalary(
            double salary
    ) {

        if (salary < 10000) {

            throw new IllegalArgumentException(
                    "Salary must be at least 10000."
            );
        }

        System.out.println(
                "Salary is valid: "
                        + salary
        );
    }
}