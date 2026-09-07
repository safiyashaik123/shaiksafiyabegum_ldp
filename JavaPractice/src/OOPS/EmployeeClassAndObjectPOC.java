package OOPS;

// ==================================================
// EMPLOYEE CLASS
// ==================================================

class Employee {

    // ----------------------------------------------
    // FIELDS
    // ----------------------------------------------

    String name;
    int employeeId;
    String department;
    double salary;


    // ----------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------

    Employee(
            String name,
            int employeeId,
            String department,
            double salary
    ) {

        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.salary = salary;
    }


    // ----------------------------------------------
    // METHOD
    // ----------------------------------------------

    void displayDetails() {

        System.out.println(
                "Employee Name: " + name
        );

        System.out.println(
                "Employee ID: " + employeeId
        );

        System.out.println(
                "Department: " + department
        );

        System.out.println(
                "Salary: " + salary
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeeClassAndObjectPOC {

    public static void main(String[] args) {

        // ------------------------------------------
        // CREATE FIRST OBJECT
        // ------------------------------------------

        Employee employee1 =
                new Employee(
                        "Alice",
                        101,
                        "Engineering",
                        60000
                );


        // ------------------------------------------
        // CREATE SECOND OBJECT
        // ------------------------------------------

        Employee employee2 =
                new Employee(
                        "Bob",
                        102,
                        "Testing",
                        50000
                );


        // ------------------------------------------
        // USE FIRST OBJECT
        // ------------------------------------------

        System.out.println("EMPLOYEE 1");
        System.out.println("----------");

        employee1.displayDetails();


        // ------------------------------------------
        // USE SECOND OBJECT
        // ------------------------------------------

        System.out.println();

        System.out.println("EMPLOYEE 2");
        System.out.println("----------");

        employee2.displayDetails();
    }
}