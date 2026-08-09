import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "180px",
        padding: "15px",
        borderRight: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <NavLink to="/dashboard">Overview</NavLink>

      <NavLink to="/dashboard/students">
        Students
      </NavLink>

      <NavLink to="/dashboard/employees">
         Employees
        </NavLink>

      <NavLink to="/dashboard/profile">
        Profile
      </NavLink>

      <NavLink to="/dashboard/settings">
        Settings
      </NavLink>
    </div>
  );
}

export default Sidebar;