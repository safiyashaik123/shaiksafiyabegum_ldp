package Collections;

import java.util.HashMap;
import java.util.Map;

public class EmployeeHashMapPOC {

    public static void main(String[] args) {

        // ==================================================
        // CREATE HASHMAP
        // ==================================================

        HashMap<Integer, String> employees =
                new HashMap<>();


        // ==================================================
        // ADD EMPLOYEES
        // ==================================================

        employees.put(101, "Alice");
        employees.put(102, "Bob");
        employees.put(103, "Charlie");
        employees.put(104, "David");

        System.out.println(
                "Employees: " + employees
        );


        // ==================================================
        // GET EMPLOYEE USING KEY
        // ==================================================

        System.out.println(
                "Employee with ID 102: "
                        + employees.get(102)
        );


        // ==================================================
        // CHECK WHETHER KEY EXISTS
        // ==================================================

        if (employees.containsKey(103)) {

            System.out.println(
                    "Employee ID 103 exists."
            );

        } else {

            System.out.println(
                    "Employee ID 103 does not exist."
            );
        }


        // ==================================================
        // CHECK WHETHER VALUE EXISTS
        // ==================================================

        if (employees.containsValue("Alice")) {

            System.out.println(
                    "Alice is present in the employee map."
            );
        }


        // ==================================================
        // UPDATE EMPLOYEE
        // ==================================================

        employees.put(102, "Robert");

        System.out.println(
                "After updating ID 102: "
                        + employees
        );


        // ==================================================
        // REMOVE EMPLOYEE
        // ==================================================

        employees.remove(104);

        System.out.println(
                "After removing ID 104: "
                        + employees
        );


        // ==================================================
        // SIZE
        // ==================================================

        System.out.println(
                "Number of employees: "
                        + employees.size()
        );


        // ==================================================
        // ITERATE THROUGH KEY-VALUE PAIRS
        // ==================================================

        System.out.println(
                "\nEmployee Details:"
        );

        for (Map.Entry<Integer, String> entry
                : employees.entrySet()) {

            System.out.println(
                    "Employee ID: "
                            + entry.getKey()
                            + ", Name: "
                            + entry.getValue()
            );
        }


        // ==================================================
        // CHECK DUPLICATE KEY
        // ==================================================

        employees.put(101, "Alice Updated");

        System.out.println(
                "\nAfter using existing key 101:"
        );

        System.out.println(
                employees
        );


        // ==================================================
        // CHECK EMPTY
        // ==================================================

        System.out.println(
                "Is employee map empty: "
                        + employees.isEmpty()
        );


        // ==================================================
        // CLEAR MAP
        // ==================================================

        employees.clear();

        System.out.println(
                "After clear: "
                        + employees
        );

        System.out.println(
                "Is employee map empty: "
                        + employees.isEmpty()
        );
    }
}