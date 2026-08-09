import EventPlayground from "./components/events/EventPlayground";
//  import EmployeeForm from "./components/EmployeeForm";
//import EnhancedEmployeeForm from "./components/EnhancedEmployeeForm";
//import LoginForm from"./components/LoginForm";
import EmployeeHookForm from "./components/EmployeeHookForm";
import FieldArrayPOC from "./components/FieldArrayPOC";
import CustomValidationPOC from "./components/CustomValidationPOC";
import ControllerPOC from "./components/ControllerPOC";
function App() {
  return (
    <div>
      {/* <h1>React Event & Form Management POC</h1> */}

      {/* Uncomment one component at a time */}

      {/* <EventPlayground /> */}
      <EmployeeHookForm /> 
      <ControllerPOC />
      <FieldArrayPOC />
      <CustomValidationPOC />
      {/* <LoginForm /> */}

      {/* <EmployeeForm /> */}

      {/* <EnhancedEmployeeForm /> */}
    </div>
  );
}

export default App;
