package Assignments;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class KYCApplicationTest {

    // Test when anniversary is exactly today
    @Test
    void testAnniversaryToday() {

        String result = KYCApplication.getKYCDateRange(
                "15-06-2019",
                "15-06-2020"
        );

        assertEquals(
                "16-05-2020 15-06-2020",
                result
        );
    }

    // Test when anniversary is within 30 days
    @Test
    void testAnniversaryWithin30Days() {

        String result = KYCApplication.getKYCDateRange(
                "10-08-2020",
                "20-07-2021"
        );

        assertEquals(
                "11-07-2021 20-07-2021",
                result
        );
    }

    // Test invalid date
    @Test
    void testInvalidDate() {

        assertThrows(
                Exception.class,
                () -> KYCApplication.getKYCDateRange(
                        "32-01-2020",
                        "01-02-2020"
                )
        );
    }
}