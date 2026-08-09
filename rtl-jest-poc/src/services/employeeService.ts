export type Employee = {
  id: number;
  name: string;
  role: string;
};

export async function getEmployees(): Promise<Employee[]> {
  return [
    {
      id: 1,
      name: "Safiya",
      role: "Developer",
    },
    {
      id: 2,
      name: "Rahul",
      role: "Tester",
    },
  ];
}