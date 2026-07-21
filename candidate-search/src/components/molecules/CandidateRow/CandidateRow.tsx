import {
  Chip,
  Link,
  TableCell,
  TableRow,
} from "@mui/material";

import type { Candidate } from "../../../types/candidate";
import Typography from "../../atoms/Typography/Typography";
import COLORS from "../../../theme/colors";
type CandidateRowProps = {
  candidate: Candidate;
};

function CandidateRow({
  candidate,
}: CandidateRowProps) {
  return (
    <TableRow hover>
      <TableCell>
        <Link
          href="#"
          underline="none"
          color="primary"
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
            }}
          >
            {candidate.name}
          </Typography>
        </Link>
      </TableCell>

      <TableCell>
        <Typography variant="body2">
          {candidate.adjudication}
        </Typography>
      </TableCell>

      <TableCell>
        <Chip
  label={candidate.status}
  size="small"
  sx={{
    backgroundColor:
      candidate.status === "CLEAR"
        ? COLORS.SUCCESS_BG
        : COLORS.WARNING_BG,
    color:
      candidate.status === "CLEAR"
        ? COLORS.SUCCESS_TEXT
        : COLORS.WARNING_TEXT,
  }}
/>
      </TableCell>

      <TableCell>
        <Typography variant="body2">
          {candidate.location}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body2">
          {candidate.date}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

export default CandidateRow;