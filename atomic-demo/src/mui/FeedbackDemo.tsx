import { useState } from "react";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Typography,
} from "@mui/material";

function FeedbackDemo() {

  const [openDialog, setOpenDialog] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAdd = () => {
    alert("Student Added Successfully");
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  return (
    <>

      <Typography
        variant="h4"
        gutterBottom
      >
        Student Operations
      </Typography>

      <Button
        variant="contained"
        onClick={handleAdd}
      >
        Add Student
      </Button>

      <br /><br />

      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
      >
        Delete Student
      </Button>

      <br /><br />

      <Alert severity="success">
        Student Added Successfully
      </Alert>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >

        <DialogTitle>
          Delete Student
        </DialogTitle>

        <DialogContent>
          Are you sure you want to delete this student?
        </DialogContent>

        <DialogActions>

          <Button
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>

          <Button
            color="error"
            onClick={confirmDelete}
          >
            Delete
          </Button>

        </DialogActions>

      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >

        <Alert severity="success">
          Student Deleted Successfully
        </Alert>

      </Snackbar>

    </>
  );
}

export default FeedbackDemo;