import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

const CashKickCard = () => {
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
      <Typography variant="h5">
        Launch a new
      </Typography>

      <Typography variant="h5">
        Cash Kick
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 3,
          mb: 4,
        }}
      >
        You have upto
        <strong> $709,546.00 </strong>
        available for a new Cash Kick.
      </Typography>

      <Box
        sx={{
          mt: "auto",
        }}
      >
        <Button fullWidth>
          New Cash Kick
        </Button>
      </Box>
    </Card>
  );
};

export default CashKickCard;