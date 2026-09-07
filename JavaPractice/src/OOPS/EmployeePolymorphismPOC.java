package OOPS;


// ==================================================
// SALARY CALCULATOR
// ==================================================
// Demonstrates COMPILE-TIME POLYMORPHISM
// through method overloading.
// ==================================================

class PolymorphismSalaryCalculator {

    // ----------------------------------------------
    // METHOD 1
    // ----------------------------------------------

    public double calculateSalary(
            double basicSalary
    ) {

        return basicSalary;
    }


    // ----------------------------------------------
    // METHOD 2
    // ----------------------------------------------

    public double calculateSalary(
            double basicSalary,
            double bonus
    ) {

        return basicSalary + bonus;
    }


    // ----------------------------------------------
    // METHOD 3
    // ----------------------------------------------

    public double calculateSalary(
            double basicSalary,
            double bonus,
            double allowance
    ) {

        return basicSalary
                + bonus
                + allowance;
    }
}


// ==================================================
// PARENT CLASS
// ==================================================
// Used for RUNTIME POLYMORPHISM.
// ==================================================

class PolymorphismEmployee {

    String name;


    public PolymorphismEmployee(String name) {

        this.name = name;
    }


    public void work() {

        System.out.println(
                name + " is working."
        );
    }
}


// ==================================================
// CHILD CLASS - DEVELOPER
// ==================================================

class PolymorphismDeveloper
        extends PolymorphismEmployee {

    public PolymorphismDeveloper(
            String name
    ) {

        super(name);
    }


    @Override
    public void work() {

        System.out.println(
                name + " is writing code."
        );
    }
}


// ==================================================
// CHILD CLASS - TESTER
// ==================================================

class PolymorphismTester
        extends PolymorphismEmployee {

    public PolymorphismTester(
            String name
    ) {

        super(name);
    }


    @Override
    public void work() {

        System.out.println(
                name + " is testing the application."
        );
    }
}


// ==================================================
// CHILD CLASS - MANAGER
// ==================================================

class PolymorphismManager
        extends PolymorphismEmployee {

    public PolymorphismManager(
            String name
    ) {

        super(name);
    }


    @Override
    public void work() {

        System.out.println(
                name + " is managing the team."
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeePolymorphismPOC {

    public static void main(String[] args) {


        // ==================================================
        // 1. COMPILE-TIME POLYMORPHISM
        // ==================================================

        System.out.println(
                "===== COMPILE-TIME POLYMORPHISM ====="
        );


        PolymorphismSalaryCalculator calculator =
                new PolymorphismSalaryCalculator();


        // Same method name
        // Different number of parameters

        double salary1 =
                calculator.calculateSalary(50000);


        double salary2 =
                calculator.calculateSalary(
                        50000,
                        5000
                );


        double salary3 =
                calculator.calculateSalary(
                        50000,
                        5000,
                        3000
                );


        System.out.println(
                "Basic Salary: " + salary1
        );

        System.out.println(
                "Basic + Bonus: " + salary2
        );

        System.out.println(
                "Basic + Bonus + Allowance: "
                        + salary3
        );


        // ==================================================
        // 2. RUNTIME POLYMORPHISM
        // ==================================================

        System.out.println();

        System.out.println(
                "===== RUNTIME POLYMORPHISM ====="
        );


        // Parent reference
        // Child object

        PolymorphismEmployee employee;


        employee =
                new PolymorphismDeveloper(
                        "Alice"
                );

        employee.work();


        employee =
                new PolymorphismTester(
                        "Bob"
                );

        employee.work();


        employee =
                new PolymorphismManager(
                        "Charlie"
                );

        employee.work();
    }
}