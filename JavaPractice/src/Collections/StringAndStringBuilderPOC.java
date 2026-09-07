package Collections;

public class StringAndStringBuilderPOC {

    public static void main(String[] args) {

        // ==================================================
        // STRING
        // ==================================================

        System.out.println("===== STRING =====");

        String employeeName = "Alice Shaik";
        String department = "Engineering";

        // ----------------------------------------------
        // Basic String operations
        // ----------------------------------------------

        System.out.println(
                "Employee Name: " + employeeName
        );

        System.out.println(
                "Length: " + employeeName.length()
        );

        System.out.println(
                "First Character: "
                        + employeeName.charAt(0)
        );

        System.out.println(
                "Uppercase: "
                        + employeeName.toUpperCase()
        );

        System.out.println(
                "Contains 'Alice': "
                        + employeeName.contains("Alice")
        );


        // ----------------------------------------------
        // String comparison
        // ----------------------------------------------

        String anotherName = "Alice Shaik";

        System.out.println(
                "Names are equal: "
                        + employeeName.equals(anotherName)
        );


        // ----------------------------------------------
        // Substring
        // ----------------------------------------------

        String firstName =
                employeeName.substring(0, 5);

        System.out.println(
                "First Name: " + firstName
        );


        // ----------------------------------------------
        // String immutability
        // ----------------------------------------------

        String message = "Hello";

        message.concat(" Java");

        System.out.println(
                "After concat without assignment: "
                        + message
        );

        message =
                message.concat(" Java");

        System.out.println(
                "After concat with assignment: "
                        + message
        );


        // ==================================================
        // STRINGBUILDER
        // ==================================================

        System.out.println();

        System.out.println(
                "===== STRINGBUILDER ====="
        );


        StringBuilder employeeReport =
                new StringBuilder();


        // ----------------------------------------------
        // APPEND
        // ----------------------------------------------

        employeeReport.append(
                "Employee Report\n"
        );

        employeeReport.append(
                "Name: " + employeeName + "\n"
        );

        employeeReport.append(
                "Department: " + department + "\n"
        );

        employeeReport.append(
                "Role: Developer\n"
        );

        System.out.println(
                employeeReport
        );


        // ----------------------------------------------
        // INSERT
        // ----------------------------------------------

        employeeReport.insert(
                0,
                "===== COMPANY REPORT =====\n"
        );

        System.out.println(
                "After insert:\n"
                        + employeeReport
        );


        // ----------------------------------------------
        // REPLACE
        // ----------------------------------------------

        employeeReport.replace(
                employeeReport.indexOf("Developer"),
                employeeReport.indexOf("Developer")
                        + "Developer".length(),
                "Senior Developer"
        );

        System.out.println(
                "After replace:\n"
                        + employeeReport
        );


        // ----------------------------------------------
        // DELETE
        // ----------------------------------------------

        employeeReport.delete(
                0,
                employeeReport.indexOf("Employee Report")
        );

        System.out.println(
                "After delete:\n"
                        + employeeReport
        );


        // ----------------------------------------------
        // REVERSE
        // ----------------------------------------------

        StringBuilder employeeId =
                new StringBuilder("EMP1001");

        employeeId.reverse();

        System.out.println(
                "Reversed Employee ID: "
                        + employeeId
        );


        // ----------------------------------------------
        // CONVERT STRINGBUILDER TO STRING
        // ----------------------------------------------

        String finalReport =
                employeeReport.toString();

        System.out.println(
                "Final Report as String:\n"
                        + finalReport
        );


        // ==================================================
        // STRING VS STRINGBUILDER
        // ==================================================

        System.out.println();

        System.out.println(
                "===== STRING VS STRINGBUILDER ====="
        );


        System.out.println(
                "String → Immutable"
        );

        System.out.println(
                "StringBuilder → Mutable"
        );
    }
}