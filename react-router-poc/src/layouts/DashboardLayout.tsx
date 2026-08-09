import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <>
      <h1>Student Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            border: "1px solid gray",
            padding: "20px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;