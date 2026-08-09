import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

function LayoutDemo() {
  return (
    <Container>

      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Student Dashboard
      </Typography>

      <Box>

        <Stack spacing={3}>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3}>
                <Typography variant="h6">
                  Student Profile
                </Typography>

                <Typography>
                  Name : Safiya
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3}>
                <Typography variant="h6">
                  Attendance
                </Typography>

                <Typography>
                  92%
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3}>
                <Typography variant="h6">
                  Course Details
                </Typography>

                <Typography>
                  Artificial Intelligence & Data Science
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={3}>
                <Typography variant="h6">
                  Results
                </Typography>

                <Typography>
                  CGPA : 8.78
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </Stack>

      </Box>

    </Container>
  );
}

export default LayoutDemo;