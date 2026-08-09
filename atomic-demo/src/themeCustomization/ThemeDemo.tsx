import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function ThemeDemo() {
  return (
    <Card
      sx={{
        width: 350,
        margin: "40px auto",
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Student Profile
        </Typography>

        <Typography>Name : Safiya</Typography>

        <Typography>Course : React + MUI</Typography>

        <Typography>
          Module : Theme Customization
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ThemeDemo;