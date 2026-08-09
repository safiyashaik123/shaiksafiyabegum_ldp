import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#90caf9",
    },

    secondary: {
      main: "#ce93d8",
    },

    background: {
      default: "#121212",
      paper: "#1e1e1e",
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

export default darkTheme;