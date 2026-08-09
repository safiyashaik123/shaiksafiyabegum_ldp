import { createContext, useState } from "react";

export type Employee = {
  name: string;
  department: string;
  salary: string;
};

type EmployeeContextType = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
};

export const EmployeeContext =
  createContext<EmployeeContextType>({
    employee: {
      name: "",
      department: "",
      salary: "",
    },
    setEmployee: () => {},
  });

type EmployeeProviderProps = {
  children: React.ReactNode;
};

function EmployeeProvider({ children }: EmployeeProviderProps) {
  const [employee, setEmployee] = useState<Employee>({
    name: "Safiya",
    department: "Engineering",
    salary: "₹50,000",
  });

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;