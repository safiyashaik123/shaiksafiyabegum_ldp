import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import type {
  ReactNode,
} from "react";

type CustomThemeProviderProps = {
  children: ReactNode;
  theme: any;
};

function CustomThemeProvider({
  children,
  theme,
}: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;