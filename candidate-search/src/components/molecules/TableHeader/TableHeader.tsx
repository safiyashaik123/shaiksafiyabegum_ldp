import {
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import Typography from "../../atoms/Typography/Typography";

const headers = [
  "NAME",
  "ADJUDICATION",
  "STATUS",
  "LOCATION",
  "DATE",
];

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {header}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;