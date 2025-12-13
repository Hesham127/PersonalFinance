package com.codewithmosh.felosy_project.services;

import com.codewithmosh.felosy_project.Repositories.AccountRepository;
import com.codewithmosh.felosy_project.Repositories.CategoryRepository;
import com.codewithmosh.felosy_project.Repositories.TransactionRepository;
import com.codewithmosh.felosy_project.Repositories.UserRepository;
import com.codewithmosh.felosy_project.dtos.CreateTransactionDto;
import com.codewithmosh.felosy_project.entities.Account;
import com.codewithmosh.felosy_project.entities.Category;
import com.codewithmosh.felosy_project.entities.Transaction;
import com.codewithmosh.felosy_project.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public Transaction create(CreateTransactionDto dto) {
        // Validate user exists
        User user = userRepository.findUserById(dto.getUserId());

        // Validate account exists
        Account account = accountRepository.findById(dto.getAccountId())
                .orElseThrow(() -> new RuntimeException("Account not found with id: " + dto.getAccountId()));

        // Validate category exists (optional)
        Category category = null;
        if (dto.getCategoryId() != null) {
            category = categoryRepository.findById(dto.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Category not found with id: " + dto.getCategoryId()));
        }

        Transaction transaction = new Transaction();
        transaction.setAmount(dto.getAmount());
        transaction.setNotes(dto.getNotes());  // Uses notes field

        // Parse date - Transaction uses LocalDate not LocalDateTime
        try {
            transaction.setTransactionDate(LocalDate.parse(dto.getTransactionDate()));
        } catch (Exception e) {
            throw new RuntimeException("Invalid date format. Use YYYY-MM-DD format");
        }

        transaction.setType(dto.getType());
        transaction.setUser(user);  // Transaction has user field
        transaction.setAccount(account);
        transaction.setCategory(category);  // Can be null

        return transactionRepository.save(transaction);
    }

    public Optional<Transaction> findById(int id) {
        return transactionRepository.findById(id);
    }

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    public void delete(int id) {
        transactionRepository.deleteById(id);
    }
}
