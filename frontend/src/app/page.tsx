"use client";

import { useState, useEffect } from "react"; // Add useEffect
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ExpenseTable from "@/components/expense-table";
import AddExpenseForm from "@/components/add-expense-form";
import ExpenseFilter from "@/components/expense-filter";
import { Expense } from "@/types/expense";

export default function DashboardPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filters, setFilters] = useState({ category: "", startDate: "", endDate: "" });

  // Fetch all expenses when the component mounts
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/expenses");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched expenses:", data); // Debug log
          setExpenses(data);
        } else {
          console.error("Failed to fetch expenses:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleAddExpense = async (newExpense: Expense) => {
    try {
      console.log("Sending expense to backend:", newExpense); // Debug log

      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      if (response.ok) {
        const savedExpense = await response.json();
        console.log("Expense saved successfully:", savedExpense); // Debug log

        // Update local state with the saved expense
        setExpenses((prevExpenses) => [savedExpense, ...prevExpenses]);
      } else {
        console.log("Response:", response); // Debug log
        const errorMessage = await response.text().catch(() => "Unknown error");
        console.error("Failed to add expense:", errorMessage); // Debug log
        alert(`Failed to add expense: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error adding expense:", error); // Debug log
      alert("Failed to add expense. Please try again.");
    }
  };

  return (
    <DashboardLayout>
      {/* Filters */}
      <ExpenseFilter onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$5,000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${(5000 - expenses.reduce((sum, exp) => sum + exp.amount, 0)).toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Expense Form */}
        <AddExpenseForm onAddExpense={handleAddExpense} />

        {/* Expense Table */}
        <ExpenseTable expenses={expenses} filters={filters} />
      </div>
    </DashboardLayout>
  );
}