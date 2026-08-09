import { Routes, Route } from "react-router-dom";

// -------------------- Before (Normal Imports) --------------------

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Students from "./pages/Students";
// import StudentDetails from "./pages/StudentDetails";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Overview from "./pages/Overview";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// -------------------- After (Lazy Loading) --------------------

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Students = lazy(() => import("./pages/Students"));
const StudentDetails = lazy(() => import("./pages/StudentDetails"));
const EmployeeDetails= lazy(()=>import("./pages/EmployeeDetails"));
const EmployeeList=lazy(()=>import("./pages/EmployeeList"))
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const Overview = lazy(() => import("./pages/Overview"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const NotFound = lazy(() => import("./pages/NotFound"));

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
       <Navbar /> 

      {/* <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/student/:id"
          element={<StudentDetails />}
        /> */}

        {/* Dashboard Parent Route */}

        {/* <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
          <Route
            index
            element={<Overview />}
          />

          <Route
            path="students"
            element={<Students />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />
        </Route>
      </Routes> */}

      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/student/:id"
            element={<StudentDetails />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={<Overview />}
            />

            <Route
              path="students"
              element={<Students />}
            />
              <Route
              path="employees"
            element={<EmployeeList />}
            >
           <Route
           path=":id"
           element={<EmployeeDetails />}
            />
          </Route>
            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>
          {/* 404 Route */}

        <Route
        path="*"
       element={<NotFound />}
        />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
    