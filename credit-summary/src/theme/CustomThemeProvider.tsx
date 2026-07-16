import { ThemeProvider, CssBaseline } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

type CustomThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
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