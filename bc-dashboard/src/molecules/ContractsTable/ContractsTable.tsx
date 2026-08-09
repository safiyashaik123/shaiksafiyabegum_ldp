import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Typography from "../../atoms/Typography/Typography";

interface ContractRow {
  name: string;
  type: string;
  perPayment: string;
  termLength: string;
  fee: string;
  paymentAmount: string;
}

interface ContractsTableProps {
  headers: string[];
  rows: ContractRow[];
}

const ContractsTable = ({
  headers,
  rows,
}: ContractsTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderRadius: 3,
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "#2A292E",
            }}
          >
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  borderBottom: 0,
                  py: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {header}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover>
              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{row.name}</Typography>
              </TableCell>

              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{row.type}</Typography>
              </TableCell>

              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{row.perPayment}</Typography>
              </TableCell>

              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{row.termLength}</Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {row.fee}
                </Typography>
              </TableCell>

              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{row.paymentAmount}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContractsTable;