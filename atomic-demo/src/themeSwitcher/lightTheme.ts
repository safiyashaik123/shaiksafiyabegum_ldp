import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1976d2",
    },

    secondary: {
      main: "#9c27b0",
    },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },

  typography: {
    h4: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default lightTheme;