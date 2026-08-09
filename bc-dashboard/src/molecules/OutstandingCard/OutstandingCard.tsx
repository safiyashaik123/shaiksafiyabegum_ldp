import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import Typography from "../../atoms/Typography/Typography";

interface OutstandingCardProps {
  amount: string;
  progress: number;
}

const OutstandingCard = ({
  amount,
  progress,
}: OutstandingCardProps) => {
  return (
    <Card
  sx={{
    p: 3,
    borderRadius: 3,
    height: 250,
    width: "100%",
    boxSizing: "border-box",
  }}
>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={progress}
            size={110}
            thickness={4}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">
              {progress}%
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 3,
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Outstanding Amount
        </Typography>

        <InfoOutlinedIcon
          fontSize="small"
          sx={{
    color: "text.secondary",
  }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          mt: 1,
        }}
      >
        {amount}
      </Typography>
    </Card>
  );
};

export default OutstandingCard;