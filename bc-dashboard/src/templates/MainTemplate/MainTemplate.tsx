import Box from "@mui/material/Box";

import Sidebar from "../../organisms/Sidebar/Sidebar";
import TopBar from "../../organisms/TopBar/TopBar";

interface MainTemplateProps {
  onLogout: () => void;
  children: React.ReactNode;
}

const MainTemplate = ({
  onLogout,
  children,
}: MainTemplateProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopBar onLogout={onLogout} />

        <Box
          sx={{
            p: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainTemplate;