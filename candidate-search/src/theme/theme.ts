import { createTheme } from "@mui/material/styles";

import COLORS from "./colors";
import TYPOGRAPHY from "./typography";
import componentOverrides from "./componentOverrides";

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },

    background: {
      default: COLORS.BACKGROUND,
    },
  },

  typography: TYPOGRAPHY,

  components: componentOverrides,
});

export default theme;