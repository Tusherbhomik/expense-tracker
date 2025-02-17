"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Expense } from "@/types/expense";

export default function ExpenseTable({
  expenses,
  filters,
}: {
  expenses: Expense[];
  filters: { category: string; startDate: string; endDate: string };
}) {
  // Filter expenses based on category and date range
  const filteredExpenses = expenses.filter((expense) => {
    const isCategoryMatch = filters.category === "All" || filters.category === "" || expense.category === filters.category;
    const isStartDateMatch = filters.startDate ? new Date(expense.date) >= new Date(filters.startDate) : true;
    const isEndDateMatch = filters.endDate ? new Date(expense.date) <= new Date(filters.endDate) : true;

    return isCategoryMatch && isStartDateMatch && isEndDateMatch;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>${expense.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No expenses found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}


// C:\Program Files\PostgreSQL\17