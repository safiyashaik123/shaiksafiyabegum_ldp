import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {

    mode: "dark",

    background: {

      default: "#121212",

      paper: "#242129",

    },

    primary: {

      main: "#7B61FF",

    },

    text: {

      primary: "#FFFFFF",

      secondary: "#A8A8A8",

    },

    divider: "#3D3A43",

  },

  typography: {

    fontFamily: "Roboto",

    h5: {

      fontWeight: 600,

    },

    body1: {

      fontSize: 16,

    },

    body2: {

      fontSize: 14,

    },

    button: {

      textTransform: "none",

      fontWeight: 600,

    },

  },

  shape: {

    borderRadius: 12,

  },

});

export default theme;