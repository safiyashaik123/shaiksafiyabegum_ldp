package Assignments;

// Class definition
class Student {

    // First constructor
    Student() {
        this("Default Student");
    }

    // Second constructor
    Student(String name) {
        System.out.println("Student created: " + name);
    }
}


// Main class
public class ConstructorsAndObjects {

    public static void main(String[] args) {

        // Question 2: Creating objects using overloaded constructors

        Student student1 = new Student();

        Student student2 = new Student("John");


        // Question 3: Creating an array of object references

        Student[] students = new Student[3];

        System.out.println("Array of Student references created.");


        // Question 4: Creating objects and assigning them to the array

        students[0] = new Student("Alice");

        students[1] = new Student("Bob");

        students[2] = new Student("Charlie");
    }
}