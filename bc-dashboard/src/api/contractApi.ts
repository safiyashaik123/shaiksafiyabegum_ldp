const BASE_URL = "http://localhost:3001";

export async function getContracts() {
  const response = await fetch(`${BASE_URL}/contracts`);

  if (!response.ok) {
    throw new Error("Failed to fetch contracts");
  }

  return response.json();
}