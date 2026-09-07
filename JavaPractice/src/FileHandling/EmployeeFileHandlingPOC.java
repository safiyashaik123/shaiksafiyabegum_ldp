package FileHandling;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class EmployeeFileHandlingPOC {

    public static void main(String[] args) {

        // ==================================================
        // FILE PATH
        // ==================================================

        File employeeFile =
                new File("employee_data.txt");


        // ==================================================
        // 1. CREATE FILE
        // ==================================================

        System.out.println(
                "===== CREATE FILE ====="
        );

        try {

            if (employeeFile.createNewFile()) {

                System.out.println(
                        "Employee file created."
                );

            } else {

                System.out.println(
                        "Employee file already exists."
                );
            }

        } catch (IOException e) {

            System.out.println(
                    "Unable to create file: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 2. WRITE EMPLOYEE DATA
        // ==================================================

        System.out.println();

        System.out.println(
                "===== WRITE EMPLOYEE DATA ====="
        );

        try (BufferedWriter writer =
                     new BufferedWriter(
                             new FileWriter(
                                     employeeFile
                             )
                     )) {

            writer.write(
                    "Employee ID: 101"
            );

            writer.newLine();

            writer.write(
                    "Name: Alice Shaik"
            );

            writer.newLine();

            writer.write(
                    "Department: Engineering"
            );

            writer.newLine();

            writer.write(
                    "Role: Developer"
            );

            writer.newLine();

            writer.write(
                    "Salary: 50000"
            );

            writer.newLine();

            System.out.println(
                    "Employee data written successfully."
            );

        } catch (IOException e) {

            System.out.println(
                    "Unable to write employee data: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 3. READ EMPLOYEE DATA
        // ==================================================

        System.out.println();

        System.out.println(
                "===== READ EMPLOYEE DATA ====="
        );

        try (BufferedReader reader =
                     new BufferedReader(
                             new FileReader(
                                     employeeFile
                             )
                     )) {

            String line;

            while ((line = reader.readLine())
                    != null) {

                System.out.println(line);
            }

        } catch (IOException e) {

            System.out.println(
                    "Unable to read employee data: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 4. APPEND EMPLOYEE DATA
        // ==================================================

        System.out.println();

        System.out.println(
                "===== APPEND EMPLOYEE DATA ====="
        );

        try (BufferedWriter writer =
                     new BufferedWriter(
                             new FileWriter(
                                     employeeFile,
                                     true
                             )
                     )) {

            writer.newLine();

            writer.write(
                    "Status: Active"
            );

            System.out.println(
                    "Additional employee data added."
            );

        } catch (IOException e) {

            System.out.println(
                    "Unable to append employee data: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 5. READ UPDATED FILE
        // ==================================================

        System.out.println();

        System.out.println(
                "===== UPDATED EMPLOYEE DATA ====="
        );

        try (BufferedReader reader =
                     new BufferedReader(
                             new FileReader(
                                     employeeFile
                             )
                     )) {

            String line;

            while ((line = reader.readLine())
                    != null) {

                System.out.println(line);
            }

        } catch (IOException e) {

            System.out.println(
                    "Unable to read updated file: "
                            + e.getMessage()
            );
        }


        // ==================================================
        // 6. CHECK FILE INFORMATION
        // ==================================================

        System.out.println();

        System.out.println(
                "===== FILE INFORMATION ====="
        );

        System.out.println(
                "File name: "
                        + employeeFile.getName()
        );

        System.out.println(
                "File exists: "
                        + employeeFile.exists()
        );

        System.out.println(
                "File path: "
                        + employeeFile.getAbsolutePath()
        );

        System.out.println(
                "File size: "
                        + employeeFile.length()
                        + " bytes"
        );


        // ==================================================
        // 7. DELETE FILE
        // ==================================================

        System.out.println();

        System.out.println(
                "===== DELETE FILE ====="
        );

        if (employeeFile.delete()) {

            System.out.println(
                    "Employee file deleted."
            );

        } else {

            System.out.println(
                    "Unable to delete employee file."
            );
        }
    }
}