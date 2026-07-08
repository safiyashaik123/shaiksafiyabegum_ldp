function loginStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Student Logged In");

            resolve({
                id: 101,
                name: "Safiya"
            });

        }, 1000);

    });

}

function getCourses(student) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Courses Loaded");

            resolve({
                ...student,
                courses: ["HTML", "CSS", "JavaScript"]
            });

        }, 2000);

    });

}

function getMarks(student) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Marks Loaded");

            resolve({
                ...student,
                marks: {
                    HTML: 95,
                    CSS: 90,
                    JavaScript: 98
                }
            });

        }, 1500);

    });

}

async function studentDashboard() {

    try {

        console.log("Loading Dashboard...\n");

        let student = await loginStudent();
         console.log(student);


        student = await getCourses(student);
         console.log(student);


        student = await getMarks(student);
         console.log(student);


        console.log("\nDashboard Ready");

        console.log(student);

    }

    catch(error) {

        console.log(error);

    }

}

studentDashboard();