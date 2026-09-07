package JavaPOCs;

import java.util.HashSet;
import java.util.Iterator;

public class EmployeeHashSetIterator {

    public static void main(String[] args) {

        // ==================================================
        // 1. CREATE HASHSET
        // ==================================================

        System.out.println(
                "===== HASHSET ====="
        );

        HashSet<String> employees =
                new HashSet<>();


        // ==================================================
        // 2. ADD EMPLOYEES
        // ==================================================

        employees.add("Alice");
        employees.add("Bob");
        employees.add("Charlie");

        // Duplicate values
        employees.add("Alice");
        employees.add("Bob");

        System.out.println(
                "Employees: "
                        + employees
        );


        // ==================================================
        // 3. CHECK SIZE
        // ==================================================

        System.out.println(
                "Unique employees: "
                        + employees.size()
        );


        // ==================================================
        // 4. CHECK EMPLOYEE
        // ==================================================

        if (employees.contains("Alice")) {

            System.out.println(
                    "Alice is registered."
            );
        }


        // ==================================================
        // 5. ITERATOR
        // ==================================================

        System.out.println();

        System.out.println(
                "===== ITERATOR ====="
        );

        Iterator<String> iterator =
                employees.iterator();

        while (iterator.hasNext()) {

            String employee =
                    iterator.next();

            System.out.println(employee);
        }


        // ==================================================
        // 6. REMOVE USING ITERATOR
        // ==================================================

        System.out.println();

        System.out.println(
                "===== REMOVE USING ITERATOR ====="
        );

        Iterator<String> employeeIterator =
                employees.iterator();

        while (employeeIterator.hasNext()) {

            String employee =
                    employeeIterator.next();

            if (employee.equals("Bob")) {

                employeeIterator.remove();
            }
        }


        // ==================================================
        // 7. DISPLAY UPDATED SET
        // ==================================================

        System.out.println(
                "Employees after removing Bob: "
                        + employees
        );
    }
}
