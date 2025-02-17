package com.expense.repositories;

import com.expense.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
    List<Expense> findByCategory(String category);
    List<Expense> findByDateBetween(LocalDate startDate, LocalDate endDate);
    List<Expense> findByCategoryAndDateBetween(String category, LocalDate startDate, LocalDate endDate);
}