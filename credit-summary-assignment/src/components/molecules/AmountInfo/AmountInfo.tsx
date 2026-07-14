import { Typography } from "@mui/material";

type AmountInfoProps = {
  amount: number;
};

function AmountInfo({ amount }: AmountInfoProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
    >
      <span
        style={{
          color: "#7265FF",
          fontWeight: 600,
        }}
      >
        ${amount.toLocaleString()}
      </span>

      {" "}selected of{" "}

      <span>
        $880,000.00
      </span>
    </Typography>
  );
}

export default AmountInfo;