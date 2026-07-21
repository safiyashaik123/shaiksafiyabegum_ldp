import AddIcon from "@mui/icons-material/Add";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Box } from "@mui/material";

import Button from "../../atoms/Button/Button";

function HeaderActions() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <Button
        variant="outlined"
        startIcon={<FileDownloadOutlinedIcon />}
      >
        Export
      </Button>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
      >
        Manual Order
      </Button>
    </Box>
  );
}

export default HeaderActions;