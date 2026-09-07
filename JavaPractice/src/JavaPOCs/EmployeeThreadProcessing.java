package JavaPOCs;


// ==================================================
// EMPLOYEE PROCESSING TASK
// ==================================================

class EmployeeProcessingTask
        implements Runnable {

    private final String employeeName;

    EmployeeProcessingTask(
            String employeeName
    ) {

        this.employeeName = employeeName;
    }


    @Override
    public void run() {

        System.out.println(
                "Started processing: "
                        + employeeName
                        + " | Thread: "
                        + Thread.currentThread().getName()
        );

        try {

            // Simulate some processing work
            Thread.sleep(1000);

        } catch (InterruptedException e) {

            System.out.println(
                    "Processing interrupted for: "
                            + employeeName
            );

            Thread.currentThread().interrupt();
        }

        System.out.println(
                "Completed processing: "
                        + employeeName
        );
    }
}


// ==================================================
// MAIN CLASS
// ==================================================

public class EmployeeThreadProcessing {

    public static void main(String[] args) {

        System.out.println(
                "===== EMPLOYEE THREAD PROCESSING ====="
        );


        // ------------------------------------------
        // CREATE TASKS
        // ------------------------------------------

        EmployeeProcessingTask task1 =
                new EmployeeProcessingTask(
                        "Alice"
                );

        EmployeeProcessingTask task2 =
                new EmployeeProcessingTask(
                        "Bob"
                );


        // ------------------------------------------
        // CREATE THREADS
        // ------------------------------------------

        Thread thread1 =
                new Thread(
                        task1,
                        "Employee-Thread-1"
                );

        Thread thread2 =
                new Thread(
                        task2,
                        "Employee-Thread-2"
                );


        // ------------------------------------------
        // START THREADS
        // ------------------------------------------

        thread1.start();

        thread2.start();


        // ------------------------------------------
        // WAIT FOR THREADS
        // ------------------------------------------

        try {

            thread1.join();

            thread2.join();

        } catch (InterruptedException e) {

            System.out.println(
                    "Main thread interrupted."
            );

            Thread.currentThread().interrupt();
        }


        // ------------------------------------------
        // EXECUTES AFTER BOTH THREADS FINISH
        // ------------------------------------------

        System.out.println();

        System.out.println(
                "All employee processing completed."
        );
    }
}