const BASE_URL = "http://localhost:8080/api/expenses"; // Ensure this matches backend

export async function fetchExpenses() {
  try {
    const response = await fetch(BASE_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch expenses: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
}

export async function addExpense(expense: {
  category: string;
  amount: number;
  description: string;
  date: string;
}) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    if (!response.ok) {
      throw new Error(`Failed to add expense: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error adding expense:", error);
    return null;
  }
}
