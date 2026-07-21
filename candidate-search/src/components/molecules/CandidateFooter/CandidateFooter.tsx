import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { Box } from "@mui/material";

import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

function CandidateFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 2,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        7 out of 25 results
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="body2">
          10 / page
        </Typography>

        <KeyboardArrowDownIcon
          fontSize="small"
        />

        <Button variant="text">
          <KeyboardArrowLeftIcon />
          Previous
        </Button>

        <Button
          variant="contained"
          size="small"
        >
          1
        </Button>

        <Button
          variant="text"
          size="small"
        >
          2
        </Button>

        <Button
          variant="text"
          size="small"
        >
          3
        </Button>

        <Button variant="text">
          Next
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default CandidateFooter;