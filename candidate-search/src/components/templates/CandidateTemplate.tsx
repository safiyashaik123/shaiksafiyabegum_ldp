import { Box } from "@mui/material";
import type { ReactNode } from "react";

type CandidateTemplateProps = {
  children: ReactNode;
};

function CandidateTemplate({
  children,
}: CandidateTemplateProps) {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}

export default CandidateTemplate;