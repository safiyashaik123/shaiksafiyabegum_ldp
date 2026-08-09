import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import Typography from "../../atoms/Typography/Typography";
import DataTable from "../../molecules/DataTable/DataTable";

interface PaymentsSectionProps {
  headers: string[];
  rows: any[];
}

const PaymentsSection = ({ headers, rows }: PaymentsSectionProps) => {
  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="h5" color="text.primary">
            Your payments
          </Typography>

          <InfoOutlinedIcon fontSize="small" color="disabled" />
        </Box>

        <Button
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            textTransform: "none",
          }}
        >
          View All
        </Button>
      </Box>

      <DataTable headers={headers} rows={rows} />
    </Box>
  );
};

export default PaymentsSection;
