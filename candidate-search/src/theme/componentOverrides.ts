import type { ThemeOptions } from "@mui/material/styles";

import COLORS from "./colors";

const componentOverrides: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 8,
        fontWeight: 500,
        boxShadow: "none",
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        backgroundColor: COLORS.WHITE,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
      fullWidth: true,
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 600,
        backgroundColor: COLORS.BACKGROUND,
      },
    },
  },

  MuiChip: {
  styleOverrides: {
    root: {
      borderRadius: 4,
      fontWeight: 600,
      fontSize: "12px",
      height: 24,
    },
  },
},
};

export default componentOverrides;