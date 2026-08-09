// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
       marginBottom: "20px",
      }}
    >
      {/* <Link to="/">Home</Link>

      <Link to="/students">Students</Link>

      <Link to="/about">About</Link> */}
      <NavLink to="/">Home</NavLink>

      <NavLink
        to="/students"

        // style={({isActive})=>({

        // color:isActive?"red":"black"

        // })}
        >

        Students
        </NavLink>

      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </nav>
  );
}

export default Navbar;