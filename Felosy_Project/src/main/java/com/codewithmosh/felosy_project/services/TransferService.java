package com.codewithmosh.felosy_project.services;

import com.codewithmosh.felosy_project.Repositories.AccountRepository;
import com.codewithmosh.felosy_project.entities.Account;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@AllArgsConstructor
@Service
public class TransferService {
    private final AccountRepository accountRepository;

    @Transactional  // Important for data consistency
    public void transfer(int from, int to, BigDecimal amount) {
        Account fromAccount = accountRepository.findById(from)
                .orElseThrow(() -> new RuntimeException("From account not found"));

        Account toAccount = accountRepository.findById(to)
                .orElseThrow(() -> new RuntimeException("To account not found"));

        if (amount.signum() <= 0) {
            throw new RuntimeException("Amount must be positive");
        }

        if (fromAccount.getBalance().compareTo(amount) < 0) {
            throw new RuntimeException("Insufficient balance");
        }

        fromAccount.setBalance(fromAccount.getBalance().subtract(amount));
        toAccount.setBalance(toAccount.getBalance().add(amount));

        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);
    }
}