import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },

    secondary: {
      main: COLORS.SECONDARY,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;