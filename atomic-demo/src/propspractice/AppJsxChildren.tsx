import Card from "./Cards";

function AppJsxChildren() {
  return (
    <>
      <h1>JSX Prop vs Children Prop</h1>

      <Card
        title="Student Details"
        action={<button>Edit Profile</button>}
      >
        <p>Name: Safiya</p>
        <p>Course: React</p>
        <p>Age: 22</p>
      </Card>

      <Card
        title="Employee Details"
        action={<button>View Employee</button>}
      >
        <p>Name: Rahul</p>
        <p>Department: IT</p>
        <p>Experience: 2 Years</p>
      </Card>
    </>
  );
}

export default AppJsxChildren;