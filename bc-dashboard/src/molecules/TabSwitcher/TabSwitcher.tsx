import Box from "@mui/material/Box";

import Button from "../../atoms/Button/Button";

interface TabSwitcherProps {
  activeTab: "payments" | "contracts";
  onTabChange: (tab: "payments" | "contracts") => void;
}

const TabSwitcher = ({
  activeTab,
  onTabChange,
}: TabSwitcherProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
      }}
    >
      <Button
        variant={
          activeTab === "payments"
            ? "contained"
            : "outlined"
        }
        onClick={() => onTabChange("payments")}
      >
        Payments
      </Button>

      <Button
        variant={
          activeTab === "contracts"
            ? "contained"
            : "outlined"
        }
        onClick={() => onTabChange("contracts")}
      >
        Contracts
      </Button>
    </Box>
  );
};

export default TabSwitcher;