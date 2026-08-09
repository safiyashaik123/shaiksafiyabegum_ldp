// import MainTemplate from "../../templates/MainTemplate/MainTemplate";

// import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
// import PaymentsSection from "../../organisms/PaymentsSection/PaymentsSection";

// import {
//   paymentsHeaders,
//   paymentsData,
// } from "../../data/paymentsData";

// interface DashboardProps {
//   onLogout: () => void;
// }

// const Dashboard = ({
//   onLogout,
// }: DashboardProps) => {
//   return (
//     <MainTemplate onLogout={onLogout}>
//       <DashboardHeader />

//       <PaymentsSection
//         headers={paymentsHeaders}
//         rows={paymentsData}
//       />
//     </MainTemplate>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";

import MainTemplate from "../../templates/MainTemplate/MainTemplate";

import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
import PaymentsSection from "../../organisms/PaymentsSection/PaymentsSection";

import { paymentsHeaders } from "../../data/paymentsData";

import { getPayments } from "../../api/paymentApi";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({
  onLogout,
}: DashboardProps) => {
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    async function loadPayments() {
      try {
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    }

    loadPayments();
  }, []);

  return (
    <MainTemplate onLogout={onLogout}>
      <DashboardHeader />

      <PaymentsSection
        headers={paymentsHeaders}
        rows={payments}
      />
    </MainTemplate>
  );
};

export default Dashboard;