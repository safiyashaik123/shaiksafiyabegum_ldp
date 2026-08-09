const BASE_URL = "http://localhost:3001";

export async function getPayments() {
  const response = await fetch(`${BASE_URL}/payments`);

  if (!response.ok) {
    throw new Error("Failed to fetch payments");
  }

  return response.json();
}