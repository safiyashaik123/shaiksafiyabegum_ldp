package JavaPOCs;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class JavaDataStructures {

    public static void main(String[] args) {

        // ==================================================
        // 1. ARRAY
        // ==================================================

        System.out.println("===== ARRAY =====");

        String[] employees = {
                "Alice",
                "Bob",
                "Charlie",
                "David"
        };

        System.out.println(
                "Employee at index 0: "
                        + employees[0]
        );

        // Update an employee
        employees[1] = "John";

        System.out.println(
                "Updated employee at index 1: "
                        + employees[1]
        );

        System.out.println(
                "Total employees: "
                        + employees.length
        );

        System.out.println("All employees:");

        for (String employee : employees) {

            System.out.println(employee);
        }


        // ==================================================
        // 2. LINKEDLIST
        // ==================================================

        System.out.println();
        System.out.println("===== LINKEDLIST =====");

        LinkedList<String> employeeList =
                new LinkedList<>();

        employeeList.add("Alice");
        employeeList.add("Bob");
        employeeList.add("Charlie");

        System.out.println(
                "Employees: "
                        + employeeList
        );

        // Add at beginning
        employeeList.addFirst("David");

        // Add at end
        employeeList.addLast("Emma");

        System.out.println(
                "After adding: "
                        + employeeList
        );

        // Remove from beginning
        employeeList.removeFirst();

        // Remove from end
        employeeList.removeLast();

        System.out.println(
                "After removing: "
                        + employeeList
        );

        System.out.println(
                "Employee at index 1: "
                        + employeeList.get(1)
        );


        // ==================================================
        // 3. STACK
        // ==================================================

        System.out.println();
        System.out.println("===== STACK =====");

        Stack<String> employeeActions =
                new Stack<>();

        employeeActions.push("Login");
        employeeActions.push("View Profile");
        employeeActions.push("Update Profile");

        System.out.println(
                "Actions: "
                        + employeeActions
        );

        // View top action
        System.out.println(
                "Top action: "
                        + employeeActions.peek()
        );

        // Remove top action
        String removedAction =
                employeeActions.pop();

        System.out.println(
                "Removed action: "
                        + removedAction
        );

        System.out.println(
                "Remaining actions: "
                        + employeeActions
        );


        // ==================================================
        // 4. QUEUE
        // ==================================================

        System.out.println();
        System.out.println("===== QUEUE =====");

        Queue<String> employeeQueue =
                new LinkedList<>();

        employeeQueue.offer("Alice");
        employeeQueue.offer("Bob");
        employeeQueue.offer("Charlie");

        System.out.println(
                "Employees waiting: "
                        + employeeQueue
        );

        // View first employee
        System.out.println(
                "Next employee: "
                        + employeeQueue.peek()
        );

        // Process first employee
        String processedEmployee =
                employeeQueue.poll();

        System.out.println(
                "Processed employee: "
                        + processedEmployee
        );

        System.out.println(
                "Remaining employees: "
                        + employeeQueue
        );


        // ==================================================
        // 5. SUMMARY
        // ==================================================

        System.out.println();
        System.out.println(
                "===== DATA STRUCTURES SUMMARY ====="
        );

        System.out.println(
                "Array      -> Fixed size"
        );

        System.out.println(
                "LinkedList -> Dynamic list"
        );

        System.out.println(
                "Stack      -> LIFO"
        );

        System.out.println(
                "Queue      -> FIFO"
        );
    }
}