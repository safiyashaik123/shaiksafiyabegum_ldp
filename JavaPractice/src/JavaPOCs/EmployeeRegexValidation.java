package JavaPOCs;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmployeeRegexValidation {

    public static void main(String[] args) {

        // ==================================================
        // 1. EMPLOYEE ID VALIDATION
        // ==================================================

        System.out.println("===== EMPLOYEE ID =====");

        String employeeId = "EMP101";

        Pattern employeeIdPattern =
                Pattern.compile("EMP[0-9]{3}");

        Matcher employeeIdMatcher =
                employeeIdPattern.matcher(employeeId);

        if (employeeIdMatcher.matches()) {

            System.out.println(
                    "Employee ID is valid."
            );

        } else {

            System.out.println(
                    "Employee ID is invalid."
            );
        }


        // ==================================================
        // 2. PHONE NUMBER VALIDATION
        // ==================================================

        System.out.println();

        System.out.println("===== PHONE NUMBER =====");

        String phoneNumber = "9876543210";

        Pattern phonePattern =
                Pattern.compile("[0-9]{10}");

        Matcher phoneMatcher =
                phonePattern.matcher(phoneNumber);

        if (phoneMatcher.matches()) {

            System.out.println(
                    "Phone number is valid."
            );

        } else {

            System.out.println(
                    "Phone number is invalid."
            );
        }


        // ==================================================
        // 3. EMAIL VALIDATION
        // ==================================================

        System.out.println();

        System.out.println("===== EMAIL =====");

        String email = "alice@gmail.com";

        Pattern emailPattern =
                Pattern.compile(
                        "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$"
                );

        Matcher emailMatcher =
                emailPattern.matcher(email);

        if (emailMatcher.matches()) {

            System.out.println(
                    "Email is valid."
            );

        } else {

            System.out.println(
                    "Email is invalid."
            );
        }
    }
}