export type Employee = {
  id: number;
  name: string;
};

export async function fetchEmployees(
): Promise<Employee[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  const data = await response.json();

  return data.map((user: any) => ({
    id: user.id,
    name: user.name,
  }));
}

