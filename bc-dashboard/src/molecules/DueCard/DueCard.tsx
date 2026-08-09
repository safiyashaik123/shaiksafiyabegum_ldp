import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Typography from "../../atoms/Typography/Typography";

interface DueCardProps {
  dueDate: string;
  amount: string;
  badge: string;
}

const DueCard = ({
  dueDate,
  amount,
  badge,
}: DueCardProps) => {
  return (
    <Card
      sx={{
        position: "relative",
        p: 4,
        height: 250,
        width: "100%",
        borderRadius: 4,
        bgcolor: "background.paper",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Chip
        label={badge}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "#F8B4C7",
          color: "#2D2A32",
          fontWeight: 600,
          borderRadius: "6px",
          zIndex: 2,
        }}
      />

      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: 2,
          bgcolor: "#2B2A30",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <ReceiptLongOutlinedIcon
          color="primary"
          sx={{ fontSize: 34 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {dueDate}
        </Typography>

        <InfoOutlinedIcon
          sx={{
            fontSize: 18,
            color: "text.disabled",
          }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        {amount}
      </Typography>
    </Card>
  );
};

export default DueCard;