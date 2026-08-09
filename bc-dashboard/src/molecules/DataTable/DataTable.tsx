import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Typography from "../../atoms/Typography/Typography";
import StatusChip from "../../atoms/StatusChip/StatusChip";

interface PaymentRow {
  dueDate: string;
  days: string;
  status: string;
  expectedAmount: string;
  outstanding: string;
}

interface DataTableProps {
  headers: string[];
  rows: PaymentRow[];
}

const DataTable = ({
  headers,
  rows,
}: DataTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 2,
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
            <TableRow
              key={row.dueDate}
              hover
            >
              <TableCell
                sx={{
                  borderBottom: 0,
                  py: 2,
                }}
              >
                <Typography>
                  {row.dueDate}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {row.days}
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: 0,
                }}
              >
                <StatusChip
                  label={row.status}
                />
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: 0,
                }}
              >
                <Typography>
                  {row.expectedAmount}
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: 0,
                }}
              >
                <Typography>
                  {row.outstanding}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;