
package Assignments;

import java.util.Arrays;

public class VampireNumber {

    // Check whether a number is a vampire number
    public static boolean isVampireNumber(int number) {

        String numberString = String.valueOf(number);

        // Vampire numbers must have an even number of digits
        if (numberString.length() % 2 != 0) {
            return false;
        }

        int numberOfDigits = numberString.length();
        int fangDigits = numberOfDigits / 2;

        int minFang = (int) Math.pow(10, fangDigits - 1);
        int maxFang = (int) Math.pow(10, fangDigits);

        // Try possible pairs of fangs
        for (int x = minFang; x < maxFang; x++) {

            // The two fangs cannot both end in zero
            if (x % 10 == 0) {
                continue;
            }

            // x must be a factor of the number
            if (number % x != 0) {
                continue;
            }

            int y = number / x;

            // y must have the same number of digits as x
            if (y < minFang || y >= maxFang) {
                continue;
            }

            // Both fangs cannot end in zero
            if (x % 10 == 0) {
                continue;
            }

            String fangs = String.valueOf(x) + String.valueOf(y);

            // Check whether the fangs contain the same digits
            if (sameDigits(numberString, fangs)) {
                return true;
            }
        }

        return false;
    }

    // Check whether two strings contain the same digits
    private static boolean sameDigits(String number, String fangs) {

        char[] numberDigits = number.toCharArray();
        char[] fangDigits = fangs.toCharArray();

        Arrays.sort(numberDigits);
        Arrays.sort(fangDigits);

        return Arrays.equals(numberDigits, fangDigits);
    }

    public static void main(String[] args) {

        int count = 0;
        int number = 1;

        // Print the first 100 vampire numbers
        while (count < 100) {

            if (isVampireNumber(number)) {
                System.out.println(number);
                count++;
            }

            number++;
        }
    }
}