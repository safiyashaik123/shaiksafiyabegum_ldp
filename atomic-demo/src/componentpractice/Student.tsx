import { Component } from "react";

type StudentProps = {
  studentName: string;
  course: string;
};

type StudentState = {
  attendance: number;
};

class Student extends Component<StudentProps, StudentState> {

  constructor(props: StudentProps) {
    super(props);

    console.log("1. Constructor Executed");

    this.state = {
      attendance: 0,
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");
    console.log("Fetching student details from server...");
  }

  componentDidUpdate() {
    console.log("5. componentDidUpdate()");
    console.log("Attendance Updated Successfully");
  }

  componentWillUnmount() {
    console.log("Component Removed");
    console.log("Saving Student Data...");
  }

  markAttendance = () => {
    this.setState({
      attendance: this.state.attendance + 1,
    });
  };

  render() {

    console.log("2. render()");

    return (
      <>
        <h1>Student Portal</h1>

        <h2>Name : {this.props.studentName}</h2>

        <h2>Course : {this.props.course}</h2>

        <h2>Attendance : {this.state.attendance}</h2>

        <button onClick={this.markAttendance}>
          Mark Attendance
        </button>
      </>
    );
  }
}

export default Student;



