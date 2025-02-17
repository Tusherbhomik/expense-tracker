// "use client";

// import { useState, useEffect } from "react";
// import { UserButton } from "@clerk/nextjs"; // UI Component (Client-side)
// import { fetchExpenses, addExpense } from "@/lib/api";
// import ExpenseTable from "@/components/expense-table";
// import AddExpenseForm from "@/components/add-expense-form";
// import ExpenseFilter from "@/components/expense-filter";
// import { Expense } from "@/types/expense";

// export default function DashboardPage() {
//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [filters, setFilters] = useState({ category: "All", startDate: "", endDate: "" });

//   // Fetch expenses on component mount
//   useEffect(() => {
//     async function loadExpenses() {
//       try {
//         const data = await fetchExpenses();
//         setExpenses(data);
//       } catch (error) {
//         console.error("Error fetching expenses:", error);
//       }
//     }
//     loadExpenses();
//   }, []);

//   console.log("🛠 Defining handleAddExpense");


//   const handleAddExpense = async (newExpense: Expense) => {
//     console.log("🔍 handleAddExpense triggered with:", newExpense); // ✅ Check if this function runs

//     try {
//       console.log("📤 Sending expense to API:", newExpense);
//       const addedExpense = await addExpense(newExpense);
//       if (addedExpense) {
//         setExpenses((prev) => [addedExpense, ...prev]); // ✅ Updates UI dynamically
//         console.log("✅ Expense added successfully:", addedExpense);
//       }
//     } catch (error) {
//       console.error("❌ Error adding expense:", error);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard!</h1>
//       <UserButton />

//       {/* Filters */}
//       <ExpenseFilter onFilterChange={setFilters} />

//       {/* Add Expense Form */}
//       <AddExpenseForm onAddExpense={handleAddExpense} />

//       {/* Expense Table */}
//       <ExpenseTable expenses={expenses} filters={filters} />
//     </div>
//   );
// }
