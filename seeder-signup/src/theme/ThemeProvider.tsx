import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

function CustomThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;