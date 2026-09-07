package OOPS;


// ==================================================
// PARENT CLASS
// ==================================================

class InheritanceEmployee {

    String name;
    int employeeId;
    String department;


    // ----------------------------------------------
    // CONSTRUCTOR
    // ----------------------------------------------

    public InheritanceEmployee(
            String name,
            int employeeId,
            String department
    ) {

        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
    }


    // ----------------------------------------------
    // COMMON METHOD
    // ----------------------------------------------

    public void displayDetails() {

        System.out.println(
                "Name: " + name
        );

        System.out.println(
                "Employee ID: " + employeeId
        );

        System.out.println(
                "Department: " + department
        );
    }


    // ----------------------------------------------
    // COMMON METHOD
    // ----------------------------------------------

    public void attendMeeting() {

        System.out.println(
                name + " is attending a meeting."
        );
    }
}


// ==================================================
// SINGLE INHERITANCE
// ==================================================
//
// InheritanceEmployee
//          ↓
// InheritanceDeveloper
//
// One parent → one child
// ==================================================

class InheritanceDeveloper
        extends InheritanceEmployee {

    String programmingLanguage;


    public InheritanceDeveloper(
            String name,
            int employeeId,
            String department,
            String programmingLanguage
    ) {

        super(
                name,
                employeeId,
                department
        );

        this.programmingLanguage =
                programmingLanguage;
    }


    public void writeCode() {

        System.out.println(
                name
                        + " is writing "
                        + programmingLanguage
                        + " code."
        );
    }
}


// ==================================================
// MULTILEVEL INHERITANCE
// ==================================================
//
// InheritanceEmployee
//          ↓
// InheritanceDeveloper
//          ↓
// InheritanceSeniorDeveloper
//
// Employee → Developer → SeniorDeveloper
// ==================================================

class InheritanceSeniorDeveloper
        extends InheritanceDeveloper {

    int yearsOfExperience;


    public InheritanceSeniorDeveloper(
            String name,
            int employeeId,
            String department,
            String programmingLanguage,
            int yearsOfExperience
    ) {

        super(
                name,
                employeeId,
                department,
                programmingLanguage
        );

        this.yearsOfExperience =
                yearsOfExperience;
    }


    public void designArchitecture() {

        System.out.println(
                name
                        + " is designing system architecture."
        );
    }
}


// ==================================================
// HIERARCHICAL INHERITANCE - TESTER
// ==================================================
//
// InheritanceEmployee
//          ↓
// InheritanceTester
// ==================================================

class InheritanceTester
        extends InheritanceEmployee {

    String testingType;


    public InheritanceTester(
            String name,
            int employeeId,
            String department,
            String testingType
    ) {

        super(
                name,
                employeeId,
                department
        );

        this.testingType = testingType;
    }


    public void performTesting() {

        System.out.println(
                name
                        + " is performing "
                        + testingType
                        + " testing."
        );
    }
}


// ==================================================
// HIERARCHICAL INHERITANCE - MANAGER
// ==================================================
//
// InheritanceEmployee
//          ↓
// InheritanceManager
// ==================================================

class InheritanceManager
        extends InheritanceEmployee {

    int teamSize;


    public InheritanceManager(
            String name,
            int employeeId,
            String department,
            int teamSize
    ) {

        super(
                name,
                employeeId,
                department
        );

        this.teamSize = teamSize;
    }


    public void manageTeam() {

        System.out.println(
                name
                        + " is managing a team of "
                        + teamSize
                        + " employees."
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeeInheritancePOC {

    public static void main(String[] args) {


        // ==========================================
        // 1. SINGLE INHERITANCE
        // ==========================================

        System.out.println(
                "===== SINGLE INHERITANCE ====="
        );

        InheritanceDeveloper developer =
                new InheritanceDeveloper(
                        "Alice",
                        101,
                        "Engineering",
                        "Java"
                );


        developer.displayDetails();

        developer.attendMeeting();

        developer.writeCode();


        // ==========================================
        // 2. MULTILEVEL INHERITANCE
        // ==========================================

        System.out.println();

        System.out.println(
                "===== MULTILEVEL INHERITANCE ====="
        );

        InheritanceSeniorDeveloper
                seniorDeveloper =
                new InheritanceSeniorDeveloper(
                        "Bob",
                        102,
                        "Engineering",
                        "Java",
                        8
                );


        // Inherited from InheritanceEmployee

        seniorDeveloper.displayDetails();

        seniorDeveloper.attendMeeting();


        // Inherited from InheritanceDeveloper

        seniorDeveloper.writeCode();


        // Own method

        seniorDeveloper.designArchitecture();


        // ==========================================
        // 3. HIERARCHICAL INHERITANCE
        // ==========================================

        System.out.println();

        System.out.println(
                "===== HIERARCHICAL INHERITANCE ====="
        );


        InheritanceDeveloper developer2 =
                new InheritanceDeveloper(
                        "Charlie",
                        103,
                        "Engineering",
                        "Python"
                );


        InheritanceTester tester =
                new InheritanceTester(
                        "David",
                        104,
                        "Quality Assurance",
                        "Automation"
                );


        InheritanceManager manager =
                new InheritanceManager(
                        "Emma",
                        105,
                        "Engineering",
                        10
                );


        // Common inherited method

        developer2.displayDetails();

        System.out.println();

        tester.displayDetails();

        System.out.println();

        manager.displayDetails();


        // Child-specific methods

        System.out.println();

        developer2.writeCode();

        tester.performTesting();

        manager.manageTeam();


        // ==========================================
        // 4. MULTIPLE INHERITANCE
        // ==========================================

        System.out.println();

        System.out.println(
                "===== MULTIPLE INHERITANCE ====="
        );

        System.out.println(
                "Java does not support multiple "
                        + "inheritance through classes."
        );


        // This is NOT valid Java:
        //
        // class Example
        //         extends InheritanceEmployee,
        //                 InheritanceTester {
        //
        // }
    }
}