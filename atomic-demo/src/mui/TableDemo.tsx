import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function TableDemo() {

  const students = [
    {
      id: 1,
      name: "Safiya",
      department: "AI & DS",
      cgpa: 8.78,
    },
    {
      id: 2,
      name: "Rahul",
      department: "CSE",
      cgpa: 8.45,
    },
    {
      id: 3,
      name: "John",
      department: "ECE",
      cgpa: 8.91,
    },
  ];

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        Student Records
      </Typography>

      <TableContainer component={Paper}>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>ID</TableCell>

              <TableCell>Name</TableCell>

              <TableCell>Department</TableCell>

              <TableCell>CGPA</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {students.map((student) => (

              <TableRow key={student.id}>

                <TableCell>{student.id}</TableCell>

                <TableCell>{student.name}</TableCell>

                <TableCell>{student.department}</TableCell>

                <TableCell>{student.cgpa}</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>
    </>
  );
}

export default TableDemo;