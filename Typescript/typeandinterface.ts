// Interface -> Object Structure
interface Employee {
    id: number;
    name: string;
    salary: number;
}

// Type -> Allowed Roles
type Role = "Admin" | "Manager" | "Employee";
type Status = "Active" | "Inactive";

// Employee Object
const emp1: Employee = {
    id: 101,
    name: "Safiya",
    salary: 50000
};

// Variables using Type
let empRole: Role = "Admin";
let empStatus: Status = "Active";


console.log("Employee Information");
console.log("---------------------");
console.log("ID:", emp1.id);
console.log("Name:", emp1.name);
console.log("Salary:", emp1.salary);
console.log("Role:", empRole);
console.log("Status:", empStatus);
export{};