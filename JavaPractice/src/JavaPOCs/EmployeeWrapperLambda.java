package JavaPOCs;

import java.util.ArrayList;

public class EmployeeWrapperLambda {

    public static void main(String[] args) {

        // ==================================================
        // 1. WRAPPER CLASSES
        // ==================================================

        System.out.println("===== WRAPPER CLASSES =====");

        // Primitive value
        int employeeAge = 25;

        // Autoboxing: int -> Integer
        Integer wrappedAge = employeeAge;

        System.out.println(
                "Primitive age: " + employeeAge
        );

        System.out.println(
                "Wrapper age: " + wrappedAge
        );


        // ==================================================
        // 2. UNBOXING
        // ==================================================

        // Wrapper value
        Integer employeeSalary = 50000;

        // Unboxing: Integer -> int
        int salary = employeeSalary;

        System.out.println(
                "Wrapper salary: " + employeeSalary
        );

        System.out.println(
                "Primitive salary: " + salary
        );


        // ==================================================
        // 3. STRING TO PRIMITIVE
        // ==================================================

        String salaryText = "60000";

        int convertedSalary =
                Integer.parseInt(salaryText);

        System.out.println(
                "Converted salary: "
                        + convertedSalary
        );


        // ==================================================
        // 4. ARRAYLIST WITH WRAPPER CLASS
        // ==================================================

        System.out.println();

        System.out.println(
                "===== ARRAYLIST WITH INTEGER ====="
        );

        ArrayList<Integer> salaries =
                new ArrayList<>();

        salaries.add(30000);
        salaries.add(40000);
        salaries.add(50000);

        System.out.println(
                "Employee salaries: "
                        + salaries
        );


        // ==================================================
        // 5. FUNCTIONAL INTERFACE
        // ==================================================

        System.out.println();

        System.out.println(
                "===== FUNCTIONAL INTERFACE ====="
        );

        EmployeeAction action =
                name -> System.out.println(
                        "Processing employee: "
                                + name
                );

        action.perform("Alice");


        // ==================================================
        // 6. LAMBDA WITH ARRAYLIST
        // ==================================================

        System.out.println();

        System.out.println(
                "===== LAMBDA WITH ARRAYLIST ====="
        );

        ArrayList<String> employees =
                new ArrayList<>();

        employees.add("Alice");
        employees.add("Bob");
        employees.add("Charlie");

        employees.forEach(
                employee ->
                        System.out.println(employee)
        );


        // ==================================================
        // 7. LAMBDA WITH CONDITION
        // ==================================================

        System.out.println();

        System.out.println(
                "===== LAMBDA WITH CONDITION ====="
        );

        salaries.forEach(
                salaryValue -> {

                    if (salaryValue >= 40000) {

                        System.out.println(
                                "Salary: "
                                        + salaryValue
                                        + " - Eligible"
                        );

                    } else {

                        System.out.println(
                                "Salary: "
                                        + salaryValue
                                        + " - Not Eligible"
                        );
                    }
                }
        );
    }


    // ======================================================
    // FUNCTIONAL INTERFACE
    // ======================================================

    @FunctionalInterface
    interface EmployeeAction {

        void perform(String name);
    }
}