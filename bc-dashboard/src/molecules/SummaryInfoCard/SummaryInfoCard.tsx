import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import Typography from "../../atoms/Typography/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
interface SummaryItem {
  icon: React.ReactNode;
  title: string;
  value: string;
}

interface SummaryInfoCardProps {
  items: SummaryItem[];
}

const SummaryInfoCard = ({
  items,
}: SummaryInfoCardProps) => {
  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 4,
        width: "100%",
        height: 250,
        bgcolor: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          width: "100%",
        }}
      >
        {items.map((item) => (
          <Grid
            key={item.title}
            size={{ xs: 4 }}
          >
            <Box
  sx={{
    width: 82,
    height: 82,
    borderRadius: "16px",
    bgcolor: "#2B2A30",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 4,
  }}
>
  {item.icon}
</Box>

            <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1,
  }}
>
  <Typography
    variant="body2"
    color="text.secondary"
  >
    {item.title}
  </Typography>

  <InfoOutlinedIcon
    sx={{
      fontSize: 16,
      color: "#6E6C76",
    }}
  />
</Box>

            <Typography
              variant="h5"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SummaryInfoCard;