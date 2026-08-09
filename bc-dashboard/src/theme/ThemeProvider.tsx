import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

import theme from "./theme";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;