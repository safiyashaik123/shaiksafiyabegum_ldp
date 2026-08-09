// import { useState } from "react";

// import Box from "@mui/material/Box";

// import MainTemplate from "../../templates/MainTemplate/MainTemplate";

// import CashAccelerationSummary from "../../organisms/CashAccelerationSummary/CashAccelerationSummary";
// import CashAccelerationSection from "../../organisms/CashAccelerationSection/CashAccelerationSection";

// import {
//   paymentsHeaders,
//   paymentsData,
// } from "../../data/paymentsData";

// import {
//   contractsHeaders,
//   contractsData,
// } from "../../data/contractsData";

// interface CashAccelerationProps {
//   onLogout: () => void;
// }

// const CashAcceleration = ({
//   onLogout,
// }: CashAccelerationProps) => {
//   const [activeTab, setActiveTab] = useState<
//     "payments" | "contracts"
//   >("payments");

//   return (
//     <MainTemplate onLogout={onLogout}>
//       <CashAccelerationSummary />

//       <Box
//         sx={{
//           mt: 5,
//         }}
//       >
//         <CashAccelerationSection
//           activeTab={activeTab}
//           onTabChange={setActiveTab}
//           paymentHeaders={paymentsHeaders}
//           paymentRows={paymentsData}
//           contractHeaders={contractsHeaders}
//           contractRows={contractsData}
//         />
//       </Box>
//     </MainTemplate>
//   );
// };

// export default CashAcceleration;
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import MainTemplate from "../../templates/MainTemplate/MainTemplate";

import CashAccelerationSummary from "../../organisms/CashAccelerationSummary/CashAccelerationSummary";
import CashAccelerationSection from "../../organisms/CashAccelerationSection/CashAccelerationSection";

import { paymentsHeaders } from "../../data/paymentsData";
import { contractsHeaders } from "../../data/contractsData";

import { getPayments } from "../../api/paymentApi";
import { getContracts } from "../../api/contractApi";

interface CashAccelerationProps {
  onLogout: () => void;
}

const CashAcceleration = ({
  onLogout,
}: CashAccelerationProps) => {
  const [activeTab, setActiveTab] = useState<
    "payments" | "contracts"
  >("payments");

  const [payments, setPayments] = useState<any[]>([]);
  const [contracts, setContracts] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const paymentData = await getPayments();
        const contractData = await getContracts();

        setPayments(paymentData);
        setContracts(contractData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadData();
  }, []);

  return (
    <MainTemplate onLogout={onLogout}>
      <CashAccelerationSummary />

      <Box sx={{ mt: 5 }}>
        <CashAccelerationSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          paymentHeaders={paymentsHeaders}
          paymentRows={payments}
          contractHeaders={contractsHeaders}
          contractRows={contracts}
        />
      </Box>
    </MainTemplate>
  );
};

export default CashAcceleration;