package com.expense.controllers;

import com.expense.models.Expense;
import com.expense.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Allow frontend to call API
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        // Ensure the ID is null for a new expense
        expense.setId(null);
        return expenseService.addExpense(expense);
    }

    @GetMapping("/category/{category}")
    public List<Expense> getExpensesByCategory(@PathVariable String category) {
        return expenseService.getExpensesByCategory(category);
    }

    @GetMapping("/date-range")
    public List<Expense> getExpensesByDateRange(@RequestParam String startDate, @RequestParam String endDate) {
        return expenseService.getExpensesByDateRange(LocalDate.parse(startDate), LocalDate.parse(endDate));
    }

    @GetMapping("/filter")
    public List<Expense> getExpensesByCategoryAndDateRange(
            @RequestParam String category,
            @RequestParam String startDate,
            @RequestParam String endDate) {
        return expenseService.getExpensesByCategoryAndDateRange(
                category,
                LocalDate.parse(startDate),
                LocalDate.parse(endDate));
    }
}