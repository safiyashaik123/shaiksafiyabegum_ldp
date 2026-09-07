package SOLID;

/*

SRP says:

"A class should have one responsibility
or one reason to change."

----------------------------------------------------------
WITHOUT SRP
----------------------------------------------------------



// class Employee {
//
//     private int id;
//     private String name;
//     private double salary;
//
//     Employee(int id, String name, double salary) {
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }
//
//     // Responsibility 1: Employee data
//     void displayEmployee() {
//         System.out.println("Employee ID: " + id);
//         System.out.println("Employee Name: " + name);
//         System.out.println("Salary: " + salary);
//     }
//
//     // Responsibility 2: Salary calculation
//     double calculateAnnualSalary() {
//         return salary * 12;
//     }
//
//     // Responsibility 3: Database operation
//     void saveToDatabase() {
//         System.out.println("Employee saved to database");
//     }
//
//     // Responsibility 4: Report generation
//     void generateReport() {
//         System.out.println("Employee Report");
//         System.out.println("----------------");
//         System.out.println("ID: " + id);
//         System.out.println("Name: " + name);
//         System.out.println("Salary: " + salary);
//     }
// }


/*
----------------------------------------------------------
WITH SRP
----------------------------------------------------------

We separate each responsibility into its own class.*/




// Responsibility 1:
// Employee class is responsible only for employee data.

class Employee {

    private int id;
    private String name;
    private double salary;

    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    void displayEmployee() {

        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Salary: " + salary);
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}


// Responsibility 2:
// SalaryCalculator is responsible only for salary calculation.

class SalaryCalculator {

    double calculateAnnualSalary(Employee employee) {

        return employee.getSalary() * 12;
    }
}


// Responsibility 3:
// EmployeeRepository is responsible only for database operations.

class EmployeeRepository {

    void save(Employee employee) {

        System.out.println(
                "Employee " +
                        employee.getName() +
                        " saved to database"
        );
    }
}


// Responsibility 4:
// EmployeeReport is responsible only for report generation.

class EmployeeReport {

    void generate(Employee employee) {

        System.out.println();
        System.out.println("Employee Report");
        System.out.println("----------------");
        System.out.println("ID: " + employee.getId());
        System.out.println("Name: " + employee.getName());
        System.out.println("Salary: " + employee.getSalary());
    }
}


// Main class

public class SRPExample {

    public static void main(String[] args) {

        // Creating Employee object

        Employee employee =
                new Employee(
                        101,
                        "Safiya",
                        50000
                );


        // Employee responsibility

        employee.displayEmployee();


        // Salary calculation responsibility

        SalaryCalculator salaryCalculator =
                new SalaryCalculator();

        double annualSalary =
                salaryCalculator.calculateAnnualSalary(employee);

        System.out.println(
                "Annual Salary: " + annualSalary
        );


        // Database responsibility

        EmployeeRepository repository =
                new EmployeeRepository();

        repository.save(employee);


        // Report responsibility

        EmployeeReport report =
                new EmployeeReport();

        report.generate(employee);
    }
}