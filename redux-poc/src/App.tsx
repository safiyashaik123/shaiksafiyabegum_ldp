// import { useState } from "react";
// import Counter from "./components/Counter";
// import ThemeSwitcher from "./components/ThemeSwitcher";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeList from "./components/EmployeeList";

// type Employee = {
//   id: number;
//   name: string;
//   role: string;
// };

// function App() {
//   const [editingEmployee, setEditingEmployee] =
//     useState<Employee | null>(null);

//   return (
//     <div>
//       <Counter />

//       <hr />

//       <ThemeSwitcher />

//       <hr />

//       <EmployeeForm
//         editingEmployee={editingEmployee}
//         clearEditing={() => setEditingEmployee(null)}
//       />

//       <hr />

//       <EmployeeList
//         onEdit={setEditingEmployee}
//       />
//     </div>
//   );
// }

// export default App;

import AsyncEmployeeList from "./components/AsyncEmployeeList";
import SelectorEntityPOC from "./components/SelectorEntityPOC";
import MiddlewareListenerPOC from "./components/MiddlewareListenerPOC";
import RTKQueryPOC from "./components/RTKQueryPOC";

function App() {
  return (
    <div>
     {/* <AsyncEmployeeList /> */}
    <SelectorEntityPOC />
    <MiddlewareListenerPOC />
    <RTKQueryPOC />
    </div>
  );
}

export default App;