package Collections;

import java.util.ArrayList;

public class EmployeeArrayListPOC {

    public static void main(String[] args) {

        // ==========================================
        // CREATE ARRAYLIST
        // ==========================================

        ArrayList<String> employees =
                new ArrayList<>();


        // ==========================================
        // ADD EMPLOYEES
        // ==========================================

        employees.add("Alice");
        employees.add("Bob");
        employees.add("Charlie");

        System.out.println(
                "Employees: " + employees
        );


        // ==========================================
        // GET EMPLOYEE
        // ==========================================

        System.out.println(
                "Employee at index 1: "
                        + employees.get(1)
        );


        // ==========================================
        // UPDATE EMPLOYEE
        // ==========================================

        employees.set(1, "David");

        System.out.println(
                "After update: " + employees
        );


        // ==========================================
        // CHECK EMPLOYEE
        // ==========================================

        System.out.println(
                "Contains Alice: "
                        + employees.contains("Alice")
        );

        System.out.println(
                "Contains John: "
                        + employees.contains("John")
        );


        // ==========================================
        // REMOVE EMPLOYEE
        // ==========================================

        employees.remove("Alice");

        System.out.println(
                "After removing Alice: "
                        + employees
        );


        // ==========================================
        // SIZE
        // ==========================================

        System.out.println(
                "Number of employees: "
                        + employees.size()
        );


        // ==========================================
        // ADD DUPLICATE
        // ==========================================

        employees.add("Charlie");

        System.out.println(
                "After adding duplicate: "
                        + employees
        );


        // ==========================================
        // CHECK EMPTY
        // ==========================================

        System.out.println(
                "Is employee list empty: "
                        + employees.isEmpty()
        );


        // ==========================================
        // ITERATE THROUGH ARRAYLIST
        // ==========================================

        System.out.println(
                "\nEmployee Names:"
        );

        for (String employee : employees) {

            System.out.println(employee);
        }


        // ==========================================
        // CLEAR ARRAYLIST
        // ==========================================

        employees.clear();

        System.out.println(
                "\nAfter clear: " + employees
        );

        System.out.println(
                "Is employee list empty: "
                        + employees.isEmpty()
        );
    }
}