import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

function CardDemo() {

  const viewProfile = () => {
    console.log("Viewing Student Profile");
  };

  return (
    <Card sx={{ maxWidth: 400 }}>

      <CardContent>

        <Avatar>
          S
        </Avatar>

        <Typography
          variant="h5"
          gutterBottom
        >
          Safiya Shaik
        </Typography>

        <Typography variant="body1">
          Department : Artificial Intelligence & Data Science
        </Typography>

        <Typography variant="body1">
          Email : safiya@gmail.com
        </Typography>

        <Typography
          variant="body1"
          color="success.main"
        >
          Status : Active
        </Typography>

      </CardContent>

      <Divider />

      <CardActions>

        <Button
          variant="contained"
          onClick={viewProfile}
        >
          View Profile
        </Button>

      </CardActions>

    </Card>
  );
}

export default CardDemo;