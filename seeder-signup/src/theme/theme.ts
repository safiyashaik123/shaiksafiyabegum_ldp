import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B21FF",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;