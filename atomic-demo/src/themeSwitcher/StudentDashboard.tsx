import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import CustomThemeProvider from "./CustomThemeProvider";

function StudentDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const currentTheme = darkMode
    ? darkTheme
    : lightTheme;

  return (
    <CustomThemeProvider theme={currentTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Card
          sx={{
            width: 500,
            bgcolor: "background.paper",
            p: 2,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
            >
              Student Dashboard
            </Typography>

            <TextField
              label="Student Name"
              fullWidth
            />

            <br />
            <br />

            <TextField
              label="Course"
              defaultValue="React + Material UI"
              fullWidth
            />

            <br />
            <br />

            <Typography color="success.main">
              Status : Active
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                variant="contained"
                color="primary"
              >
                Save
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => setDarkMode(!darkMode)}
              >
                Switch Theme
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </CustomThemeProvider>
  );
}

export default StudentDashboard;