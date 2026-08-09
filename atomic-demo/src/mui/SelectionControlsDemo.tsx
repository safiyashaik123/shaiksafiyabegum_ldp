import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";

function SelectionControlsDemo() {

  const registerStudent = () => {
    console.log("Student Registered");
  };

  return (
    <>

      <h2>Student Registration Form</h2>

      <TextField
        label="Student Name"
        fullWidth
      />

      <br /><br />

      <TextField
        label="Email"
        fullWidth
      />

      <br /><br />

      <FormControl fullWidth>

        <FormLabel>
          Department
        </FormLabel>

        <Select defaultValue="">

          <MenuItem value="">
            Select Department
          </MenuItem>

          <MenuItem value="AI & DS">
            AI & DS
          </MenuItem>

          <MenuItem value="CSE">
            CSE
          </MenuItem>

          <MenuItem value="ECE">
            ECE
          </MenuItem>

        </Select>

      </FormControl>

      <br /><br />

      <FormControl>

        <FormLabel>
          Gender
        </FormLabel>

        <RadioGroup defaultValue="Male">

          <FormControlLabel
            value="Male"
            control={<Radio />}
            label="Male"
          />

          <FormControlLabel
            value="Female"
            control={<Radio />}
            label="Female"
          />

          <FormControlLabel
            value="Other"
            control={<Radio />}
            label="Other"
          />

        </RadioGroup>

      </FormControl>

      <br />

      <FormLabel>
        Skills
      </FormLabel>

      <br />

      <FormControlLabel
        control={<Checkbox />}
        label="React"
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Java"
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Python"
      />

      <br /><br />

      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Receive Notifications"
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

export default SelectionControlsDemo;