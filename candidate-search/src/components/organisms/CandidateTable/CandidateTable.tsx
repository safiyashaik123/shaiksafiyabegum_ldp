import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import type { Candidate } from "../../../types/candidate";

import Typography from "../../atoms/Typography/Typography";
import CandidateRow from "../../molecules/CandidateRow/CandidateRow";
import SearchSection from "../../molecules/SearchSection/SearchSection";
import TableHeader from "../../molecules/TableHeader/TableHeader";
import CandidateFooter from "../../molecules/CandidateFooter/CandidateFooter";

type CandidateTableProps = {
  candidates: Candidate[];
  search: string;
  onSearchChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function CandidateTable({
  candidates,
  search,
  onSearchChange,
}: CandidateTableProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Candidate Information
        </Typography>

        <SearchSection
          search={search}
          onSearchChange={onSearchChange}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHeader />

          <TableBody>
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <CandidateRow
                  key={candidate.id}
                  candidate={candidate}
                />
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                >
                  <Typography>
                    No Candidates Found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <CandidateFooter />
    </Paper>
  );
}

export default CandidateTable;