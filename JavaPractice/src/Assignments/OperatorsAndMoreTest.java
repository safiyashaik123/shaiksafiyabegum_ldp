package Assignments;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class OperatorsAndMoreTest {

    // Test a valid vampire number
    @Test
    void testVampireNumber() {

        assertTrue(
                VampireNumber.isVampireNumber(1260)
        );
    }

    // Test a number that is not a vampire number
    @Test
    void testNotVampireNumber() {

        assertFalse(
                VampireNumber.isVampireNumber(1234)
        );
    }

    // Test odd number of digits
    @Test
    void testOddDigitNumber() {

        assertFalse(
                VampireNumber.isVampireNumber(123)
        );
    }

    // Test zero
    @Test
    void testZero() {

        assertFalse(
                VampireNumber.isVampireNumber(0)
        );
    }

    // Test negative number
    @Test
    void testNegativeNumber() {

        assertFalse(
                VampireNumber.isVampireNumber(-1260)
        );
    }
}