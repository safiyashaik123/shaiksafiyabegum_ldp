import { ThemeProvider, CssBaseline } from "@mui/material";
import type { ReactNode } from "react";

import theme from "../theme/theme";

type CustomThemeProviderProps = {
  children: ReactNode;
};

function CustomThemeProvider({
  children,
}: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;