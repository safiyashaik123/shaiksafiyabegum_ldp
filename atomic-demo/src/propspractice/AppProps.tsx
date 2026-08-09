import Student from "./Student";

function AppProps() {
  const student1 = {
    id: 1,
    city: "Hyderabad",
  };

  const student2 = {
    id: 2,
    city: "Bangalore",
  };

  const skills1 = ["React", "TypeScript", "JavaScript"];

  const skills2 = ["Angular", "HTML", "CSS"];

  const greetStudent = (name: string) => {
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <h1>Props Practice</h1>

      <Student
        name="Safiya"
        age={22}
        isPlaced={true}
        student={student1}
        skills={skills1}
        onGreet={greetStudent}
      >
        <p>This is Children Prop</p>
      </Student>

      <hr />

      <Student
        name="Rahul"
        age={21}
        isPlaced={false}
        student={student2}
        skills={skills2}
        company="TCS"
        onGreet={greetStudent}
      >
        <h4>Learning React Props</h4>
      </Student>
    </div>
  );
}

export default AppProps;