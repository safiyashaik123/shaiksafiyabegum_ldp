let employee: {
    readonly employeeId: number;
    employeeName: string;
    employeeEmail?: string;
    isPlaced: boolean;
    address: {
        city: string;
        state: string;
    };
} = {
    employeeId: 101,
    employeeName: "Safiya",
    isPlaced: true,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(employee.employeeName);
console.log(employee.address.city);

employee.employeeName = "Rahul";

console.log(employee);


export{};