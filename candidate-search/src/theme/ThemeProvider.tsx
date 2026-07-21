import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import type { ReactNode } from "react";

import theme from "./theme";

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({
  children,
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;