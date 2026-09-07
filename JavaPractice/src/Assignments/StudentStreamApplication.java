package Assignments;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StudentStreamApplication {

    public static void main(String[] args) {

        List<StudentStream> students = Arrays.asList(

                new StudentStream(111, "Jiya Brein", 17, "Female",
                        "Computer Science", 2018, 70.8),

                new StudentStream(122, "Paul Niksui", 18, "Male",
                        "Mechanical", 2016, 50.2),

                new StudentStream(133, "Martin Theron", 17, "Male",
                        "Electronic", 2017, 90.3),

                new StudentStream(144, "Murali Gowda", 18, "Male",
                        "Electrical", 2018, 80),

                new StudentStream(155, "Nima Roy", 19, "Female",
                        "Textile", 2016, 70),

                new StudentStream(166, "Iqbal Hussain", 18, "Male",
                        "Security", 2016, 70),

                new StudentStream(177, "Manu Sharma", 16, "Male",
                        "Chemical", 2018, 70),

                new StudentStream(188, "Wang Liu", 20, "Male",
                        "Computer Science", 2015, 80),

                new StudentStream(199, "Amelia Zoe", 18, "Female",
                        "Computer Science", 2016, 85),

                new StudentStream(200, "Jaden Dough", 18, "Male",
                        "Security", 2015, 82),

                new StudentStream(211, "Jasna Kaur", 20, "Female",
                        "Electronic", 2019, 83),

                new StudentStream(222, "Nitin Joshi", 19, "Male",
                        "Textile", 2016, 60.4),

                new StudentStream(233, "Jyothi Reddy", 16, "Female",
                        "Computer Science", 2015, 45.6),

                new StudentStream(244, "Nicolus Den", 16, "Male",
                        "Electronic", 2017, 95.8),

                new StudentStream(255, "Ali Baig", 17, "Male",
                        "Electronic", 2018, 88.4),

                new StudentStream(266, "Sanvi Pandey", 17, "Female",
                        "Electric", 2019, 72.4),

                new StudentStream(277, "Anuj Chettiar", 18, "Male",
                        "Computer Science", 2017, 57.5)
        );


        // 1. Print the name of all departments
        System.out.println("1. Departments:");

        students.stream()
                .map(StudentStream::getEngDepartment)
                .distinct()
                .forEach(System.out::println);


        // 2. Get students enrolled after 2018
        System.out.println("\n2. Students enrolled after 2018:");

        students.stream()
                .filter(student ->
                        student.getYearOfEnrollment() > 2018)
                .map(StudentStream::getName)
                .forEach(System.out::println);


        // 3. Get male students in Computer Science
        System.out.println("\n3. Male students in Computer Science:");

        students.stream()
                .filter(student ->
                        student.getGender().equals("Male"))
                .filter(student ->
                        student.getEngDepartment()
                                .equals("Computer Science"))
                .forEach(System.out::println);


        // 4. Count male and female students
        System.out.println("\n4. Male and Female student count:");

        Map<String, Long> genderCount =
                students.stream()
                        .collect(Collectors.groupingBy(
                                StudentStream::getGender,
                                Collectors.counting()
                        ));

        System.out.println(genderCount);


        // 5. Average age of male and female students
        System.out.println("\n5. Average age by gender:");

        Map<String, Double> averageAge =
                students.stream()
                        .collect(Collectors.groupingBy(
                                StudentStream::getGender,
                                Collectors.averagingInt(
                                        StudentStream::getAge
                                )
                        ));

        System.out.println(averageAge);


        // 6. Student having the highest percentage
        System.out.println("\n6. Student with highest percentage:");

        StudentStream highestPercentage =
                students.stream()
                        .max(Comparator.comparingDouble(
                                StudentStream::getPerTillDate
                        ))
                        .orElse(null);

        System.out.println(highestPercentage);


        // 7. Count students in each department
        System.out.println("\n7. Student count by department:");

        Map<String, Long> departmentCount =
                students.stream()
                        .collect(Collectors.groupingBy(
                                StudentStream::getEngDepartment,
                                Collectors.counting()
                        ));

        System.out.println(departmentCount);


        // 8. Average percentage in each department
        System.out.println("\n8. Average percentage by department:");

        Map<String, Double> averagePercentage =
                students.stream()
                        .collect(Collectors.groupingBy(
                                StudentStream::getEngDepartment,
                                Collectors.averagingDouble(
                                        StudentStream::getPerTillDate
                                )
                        ));

        System.out.println(averagePercentage);


        // 9. Youngest male student in Electronic department
        System.out.println("\n9. Youngest male student in Electronic:");

        StudentStream youngestMaleElectronic =
                students.stream()
                        .filter(student ->
                                student.getGender().equals("Male"))
                        .filter(student ->
                                student.getEngDepartment()
                                        .equals("Electronic"))
                        .collect(Collectors.minBy(
                                Comparator.comparingInt(
                                        StudentStream::getAge
                                )
                        ))
                        .orElse(null);

        System.out.println(youngestMaleElectronic);


        // 10. Male and female students in Computer Science
        System.out.println("\n10. Male and Female students in Computer Science:");

        Map<String, Long> computerScienceGenderCount =
                students.stream()
                        .filter(student ->
                                student.getEngDepartment()
                                        .equals("Computer Science"))
                        .collect(Collectors.groupingBy(
                                StudentStream::getGender,
                                Collectors.counting()
                        ));

        System.out.println(computerScienceGenderCount);
    }
}