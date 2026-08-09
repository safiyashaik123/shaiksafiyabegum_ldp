import Button from "@mui/material/Button";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ButtonDemo() {

  const handleAdd = () => {
    console.log("Student Added");
  };

  const handleUpdate = () => {
    console.log("Student Updated");
  };

  const handleDelete = () => {
    console.log("Student Deleted");
  };

  const handleView = () => {
    console.log("Viewing Student");
  };

  return (
    <>
      <h2>Student Actions</h2>

      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<PersonAddIcon />}
        onClick={handleAdd}
        fullWidth
      >
        Add Student
      </Button>

      <br />
      <br />

      <Button
        variant="outlined"
        color="warning"
        startIcon={<EditIcon />}
        onClick={handleUpdate}
        fullWidth
      >
        Update Student
      </Button>

      <br />
      <br />

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
        fullWidth
      >
        Delete Student
      </Button>

      <br />
      <br />

      <Button
        variant="text"
        color="success"
        endIcon={<VisibilityIcon />}
        onClick={handleView}
      >
        View Details
      </Button>

      <br />
      <br />

      <Button
        variant="contained"
        disabled
      >
        Disabled Button
      </Button>
    </>
  );
}

export default ButtonDemo;