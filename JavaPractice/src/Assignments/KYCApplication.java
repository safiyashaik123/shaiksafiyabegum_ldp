package Assignments;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class KYCApplication {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public static void main(String[] args) throws Exception {

        BufferedReader reader =
                new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(reader.readLine());

        StringBuilder output = new StringBuilder();

        for (int i = 0; i < n; i++) {

            String[] input = reader.readLine().split(" ");

            String signupDate = input[0];
            String currentDate = input[1];

            String result =
                    getKYCDateRange(signupDate, currentDate);

            output.append(result).append("\n");
        }

        System.out.print(output);

        reader.close();
    }

    // Calculates the allowed KYC date range
    public static String getKYCDateRange(
            String signupInput,
            String currentInput) {

        LocalDate signupDate =
                LocalDate.parse(signupInput, FORMATTER);

        LocalDate currentDate =
                LocalDate.parse(currentInput, FORMATTER);

        // Find the anniversary in the current year
        LocalDate anniversary = LocalDate.of(
                currentDate.getYear(),
                signupDate.getMonth(),
                signupDate.getDayOfMonth()
        );

        // If anniversary is in the future
        if (anniversary.isAfter(currentDate)) {

            long days = ChronoUnit.DAYS.between(
                    currentDate,
                    anniversary
            );

            // If anniversary is more than 30 days away,
            // use the previous anniversary
            if (days > 30) {
                anniversary = anniversary.minusYears(1);
            }
        }

        // Signup date itself is not an anniversary
        if (!anniversary.isAfter(signupDate)) {
            return "No range";
        }

        // KYC window is 30 days before and after anniversary
        LocalDate startDate = anniversary.minusDays(30);
        LocalDate endDate = anniversary.plusDays(30);

        // Future form dates are not allowed
        if (endDate.isAfter(currentDate)) {
            endDate = currentDate;
        }

        return FORMATTER.format(startDate)
                + " "
                + FORMATTER.format(endDate);
    }
}