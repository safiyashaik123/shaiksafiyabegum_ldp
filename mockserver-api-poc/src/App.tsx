// import ProductSearch from "./components/ProductSearch";
 //import EmployeeManagement from "./components/EmployeeManagement";
// import Dashboard from "./components/Dashboard";
// import EmployeeList from "./components/EmployeeList";
import AxiosCRUD from "./axios/AxiosCRUD";
import AxiosBasics from "./axios/AxiosBasics";
import QueryPromiseAll from "./axios/QueryPromiseAll";
import InterceptorPOC from "./axios/InterceptorPOC";
import AdvancedAxios from "./axios/AdvancedAxios";
function App() {
  return (
    <div>
      {/* <EmployeeManagement />
      <ProductSearch />
      <Dashboard />
      <EmployeeList />  */}

        <AxiosBasics />
        <AxiosCRUD />
        <QueryPromiseAll />
        <InterceptorPOC />
        <AdvancedAxios />

    </div>
  );
}

export default App;