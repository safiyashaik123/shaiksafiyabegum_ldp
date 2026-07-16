import { Box } from "@mui/material";

import type { ReactNode } from "react";

type CenterLayoutProps = {
  children: ReactNode;
};

function CenterLayout({
  children,
}: CenterLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}

export default CenterLayout;