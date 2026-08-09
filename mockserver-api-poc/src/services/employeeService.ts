// export async function getEmployees() {
//   const response = await fetch("http://localhost:3000/employees");

//   if (!response.ok) {
//     throw new Error("Failed to fetch employees");
//   }

//   return await response.json();
// }
export async function getEmployees() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/employees`
  );

  return await response.json();
}