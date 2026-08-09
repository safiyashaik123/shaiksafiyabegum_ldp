// import FunctionalBook from "./componentpractice/FunctionalBook";
// import ClassBook from "./componentpractice/ClassBook";

// function App() {
//   return (
//     <>
//       <h1>Functional Component</h1>

//       <FunctionalBook
//         bookName="React Basics"
//         author="John Smith"
//         price={500}
//       />

//       <hr />

//       <h1>Class Component</h1>

//       <ClassBook
//         bookName="React Basics"
//         author="John Smith"
//         price={500}
//       />
//     </>
//   );
// }

// export default App;
// import Counter from "./componentpractice/Counter";

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App;

// import Student from "./componentpractice/Student";

// function App() {
//   return (
//     <>
//       <Student
//         studentName="Safiya"
//         course="React TypeScript"
//       />
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import Students from "./componentpractice/Students";

// function App() {
//   const [showStudent, setShowStudent] = useState(true);

//   return (
//     <>
//       <h1>React Lifecycle Example</h1>

//       <button onClick={() => setShowStudent(!showStudent)}>
//         {showStudent ? "Hide Student" : "Show Student"}
//       </button>

//       <hr />

//       {showStudent && (
//         <Students
//           studentName="Safiya"
//           course="React with TypeScript"
//         />
//       )}
//     </>
//   );
// }

// export default App;

// import Employee from "./parentchildpractice/Employee";

// function App() {
//   return (
//     <>
//       <Employee />
//     </>
//   );
// }

// export default App;
// import AppCounter from "./childparentpractice/AppCounter";

// function App() {
//   return (
//     <>
//       <AppCounter />
//     </>
//   );
// }

// export default App;

// import ConditionalRendering from "./childparentpractice/ConditionalRendering";

// function App() {
//   return (
//     <>
//       <ConditionalRendering />
//     </>
//   );
// }

// export default App;
// import EmployeeList from "./childparentpractice/EmployeeList";

// function App() {
//   return (
//     <>
//       <EmployeeList />
//     </>
//   );
// }

// export default App;

// import TypographyDemo from "./mui/TypographyDemo";

// function App() {
//   return <TypographyDemo />;
// }

// export default App;
// import ButtonDemo from "./mui/ButtonDemo";

// function App() {
//   return <ButtonDemo />;
// }

// export default App;
// import TextFieldDemo from "./mui/TextFieldDemo";

// function App() {
//   return <TextFieldDemo />;
// }

// export default App;
// import SelectionControlsDemo from "./mui/SelectionControlsDemo";

// function App() {
//   return <SelectionControlsDemo />;
// }

// export default App;
// import LayoutDemo from "./mui/LayoutDemo";

// function App() {
//   return <LayoutDemo />;
// }

// export default App;

// import CardDemo from "./mui/CardDemo";

// function App() {
//   return <CardDemo />;
// }

// export default App;

// import TableDemo from "./mui/TableDemo";

// function App() {
//   return <TableDemo />;
// }

// export default App;

// import FeedbackDemo from "./mui/FeedbackDemo";

// function App() {
//   return <FeedbackDemo />;
// }

// export default App;

// import NavigationDemo from "./mui/NavigationDemo";

// function App() {
//   return <NavigationDemo />;
// }

// export default App;


// import CustomThemeProvider from "./themeCustomization/ThemeProvider";
// import ThemeDemo from "./themeCustomization/ThemeDemo";

// function App() {
//   return (
//     <CustomThemeProvider>
//       <ThemeDemo />
//     </CustomThemeProvider>
//   );
// }

// export default App;

// import ThemeDemo from "./themeCustomization/ThemeDemo";

// function App() {
//   return <ThemeDemo />;
// }

// export default App;

// import Parent from "./parentchildpractice/Parent";

// function App() {
//   return (
//     <>
//       <Parent />
//     </>
//   );
// }

// export default App;

// import StudentDashboard from "./themeSwitcher/StudentDashboard";

// function App() {
//   return <StudentDashboard />;
// }

// export default App;
// import AppProps from "./propspractice/AppProps";

// function App() {
//   return <AppProps />;
// }

//export default App;
// import AppJsxChildren from "./propspractice/AppJsxChildren";

// function App() {
//   return <AppJsxChildren />;
// }

// export default App;

// import LoginLogout from "./hookspractice/UseStatePOC/LoginLogout";

// function App() {
//   return <LoginLogout />;
// }

// export default App;

// import DigitalClock from "./hookspractice/UseEffectPOC/DigitalClock";

// function App() {
//   return <DigitalClock />;
// }

// export default App;
// import { useState } from "react";
// import DigitalClock from "./hookspractice/UseEffectPOC/DigitalClock";

// function App() {
//   const [showClock, setShowClock] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShowClock(!showClock)}>
//         {showClock ? "Hide Clock" : "Show Clock"}
//       </button>

//       <hr />

//       {showClock && <DigitalClock />}
//     </>
//   );
// }

//export default App;
// import Greeting from "./hookspractice/Greeting";

// function App() {
//   return (
//     <>
//       <Greeting />
//     </>
//   );
// }

// export default App;


// export default App;
// import StudentProfile from "./hookspractice/UseStatePOC/StudentProfile";

// function App() {
//   return <StudentProfile />;
// }

// export default App;
// import StudentList from "./hookspractice/UseStatePOC/StudentList";

// function App() {
//   return <StudentList />;
// }

// export default App;

// import UseEffectCases from "./hookspractice/UseEffectPOC/UseEffectCases";

// function App() {
//   return <UseEffectCases />;
// }

// export default App;
// import MultipleEffects from "./hookspractice/UseEffectPOC/MultipleEffects";

// function App() {
//   return <MultipleEffects />;
// }

// export default App;

// import AppOptionalProps from "./propspractice/AppOptionalProps";

// function App() {
//   return <AppOptionalProps />;
// }

// export default App;

// import EmployeeProvider from "./hookspractice/hooks/EmployeeContext";

// import Employee from "./hookspractice/UseContextPOC/Employee";

// function App() {

//   // ------------------------------
//   // BEFORE (Props Drilling)
//   // ------------------------------

//   // const employee = {
//   //   name: "Safiya",
//   //   department: "Engineering",
//   //   salary: "₹50,000",
//   // };

//   // return (
//   //   <>
//   //      <Employee employee={employee}/>
//   //   </>
//   // );

//   // ------------------------------
//   // AFTER (useContext)
//   // ------------------------------

//   return (
//     <EmployeeProvider>
//       <h1>Employee Management</h1>

//       <Employee />
//     </EmployeeProvider>
//   );
// }

// export default App;
// import StudentSearch from "./hookspractice/UseMemoPOC/StudentSearch";

// function App() {
//   return <StudentSearch />;
// }

// export default App;
// import Parent from "./hookspractice/UseCallbackPOC/Parent";

// function App() {
//   return <Parent />;
// }

// export default App;
// import AutoFocusInput from "./hookspractice/UseRefPOC/AutoFocusInput";

// function App() {
//   return <AutoFocusInput />;
// }

// export default App;

// import BankAccount from "./hookspractice/UseReducerPOC/BankAccount";

// function App() {
//   return <BankAccount />;
// }

// export default App;
// import UserName from "./hookspractice/CustomHookPOC/UserName";

// function App() {
//   return <UserName />;
// }

// export default App;
// import CounterOne from "./hookspractice/CounterOne";
// import CounterTwo from "./hookspractice/CounterTwo";

// function App() {
//   return (
//     <>
//       <CounterOne />

//       <hr />

//       <CounterTwo />
//     </>
//   );
// }
//  export default App;

import EmployeeProvider from "./hookspractice/hooks/EmployeeContext";
import Employee from "./hookspractice/UseContextPOC/Employee";
import StudentSearch from "./hookspractice/UseMemoPOC/StudentSearch";
import Parent from "./hookspractice/UseCallbackPOC/Parent";
import AutoFocusInput from "./hookspractice/UseRefPOC/AutoFocusInput";
import BankAccount from "./hookspractice/UseReducerPOC/BankAccount";
import CounterOne from "./hookspractice/CounterOne";
import CounterTwo from "./hookspractice/CounterTwo";
import CompareEffect from "./hookspractice/UseLayoutEffectPOC/CompareEffect";
import ChatScroll from "./hookspractice/UseLayoutEffectPOC/ChatScroll";
import TransitionPOC from "./hookspractice/UseTransitionPOC/TransitionPOC";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Hooks POCs</h1>

      <hr />

      <h2>1. useContext</h2>
      <EmployeeProvider>
        <Employee />
      </EmployeeProvider>

      <hr />

      <h2>2. useMemo</h2>
      <StudentSearch />

      <hr />

      <h2>3. useCallback</h2>
      <Parent />

      <hr />

      <h2>4. useRef</h2>
      <AutoFocusInput />

      <hr />

      <h2>5. useReducer</h2>
      <BankAccount />

      <hr />

      

      <h2>6. Custom Hook - Shared Counter</h2>
      <CounterOne />

      <br />

      <CounterTwo />

      <hr />
      <h2>UseLayout Effect</h2>
      <CompareEffect />
      <ChatScroll />

      <hr />
      <h2> Transition POC</h2>
      <TransitionPOC />
    </div>
  );
}

export default App;