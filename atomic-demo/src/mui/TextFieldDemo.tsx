import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TextFieldDemo() {

  const registerStudent = () => {
    console.log("Student Registered");
  };

  return (
    <>

      <h2>Student Registration Form</h2>

      <TextField
        label="Student Name"
        placeholder="Enter Student Name"
        variant="outlined"
        required
        fullWidth
      />

      <br /><br />

      <TextField
        label="Email"
        placeholder="Enter Email"
        type="email"
        helperText="Enter a valid email address"
        fullWidth
      />

      <br /><br />

      <TextField
        label="Password"
        type="password"
        helperText="Minimum 8 characters"
        fullWidth
      />

      <br /><br />

      <TextField
        label="Phone Number"
        type="tel"
        fullWidth
      />

      <br /><br />

      <TextField
        label="Address"
        multiline
        rows={4}
        placeholder="Enter Address"
        fullWidth
      />

      <br /><br />

      <TextField
        label="Student ID"
        disabled
        value="STU001"
        fullWidth
      />

      <br /><br />

      <Button
        variant="contained"
        onClick={registerStudent}
      >
        Register Student
      </Button>

    </>
  );
}

export default TextFieldDemo;