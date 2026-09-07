package OOPS;


// ==================================================
// ENCAPSULATED EMPLOYEE CLASS
// ==================================================

class EncapsulatedEmployee {

    private String name;
    private double salary;


    // Constructor
    public EncapsulatedEmployee(
            String name,
            double salary
    ) {

        this.name = name;

        if (salary >= 0) {
            this.salary = salary;
        } else {
            this.salary = 0;
        }
    }


    // Read salary
    public double getSalary() {

        return salary;
    }


    // Controlled modification
    public void increaseSalary(double amount) {

        if (amount > 0) {

            salary = salary + amount;

            System.out.println(
                    "Salary increased by: " + amount
            );

        } else {

            System.out.println(
                    "Increase amount must be positive."
            );
        }
    }


    // Display details
    public void displayDetails() {

        System.out.println(
                "Employee Name: " + name
        );

        System.out.println(
                "Salary: " + salary
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeeEncapsulationPOC {

    public static void main(String[] args) {

        EncapsulatedEmployee employee =
                new EncapsulatedEmployee(
                        "Alice",
                        60000
                );


        System.out.println(
                "Initial Salary: "
                        + employee.getSalary()
        );


        employee.increaseSalary(5000);


        System.out.println(
                "Updated Salary: "
                        + employee.getSalary()
        );


        // Invalid modification
        employee.increaseSalary(-3000);


        System.out.println();

        employee.displayDetails();


        // NOT ALLOWED:
        // employee.salary = -50000;
        //
        // salary is private
    }
}