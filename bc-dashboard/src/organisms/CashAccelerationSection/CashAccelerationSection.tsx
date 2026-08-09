import Box from "@mui/material/Box";

import ContractsTable from "../../molecules/ContractsTable/ContractsTable";
import DataTable from "../../molecules/DataTable/DataTable";

import TabSwitcher from "../../molecules/TabSwitcher/TabSwitcher";

interface CashAccelerationSectionProps {
  activeTab: "payments" | "contracts";
  onTabChange: (tab: "payments" | "contracts") => void;

  paymentHeaders: string[];
  paymentRows: any[];

  contractHeaders: string[];
  contractRows: any[];
}

const CashAccelerationSection = ({
  activeTab,
  onTabChange,

  paymentHeaders,
  paymentRows,

  contractHeaders,
  contractRows,
}: CashAccelerationSectionProps) => {
  return (
    <Box sx={{ mt: 5 }}>
      <TabSwitcher activeTab={activeTab} onTabChange={onTabChange} />

      <Box sx={{ mt: 3 }}>
        {activeTab === "payments" ? (
          <DataTable headers={paymentHeaders} rows={paymentRows} />
        ) : (
          <ContractsTable headers={contractHeaders} rows={contractRows} />
        )}
      </Box>
    </Box>
  );
};

export default CashAccelerationSection;
