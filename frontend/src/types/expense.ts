export type Expense = {
  id?: number; // Optional for new expenses
  category: string;
  amount: number;
  description: string; // ✅ Ensure description is always a string
  date: string;
};
