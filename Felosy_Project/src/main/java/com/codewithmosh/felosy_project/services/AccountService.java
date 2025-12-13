package com.codewithmosh.felosy_project.services;

import com.codewithmosh.felosy_project.Repositories.AccountRepository;
import com.codewithmosh.felosy_project.Repositories.UserRepository;
import com.codewithmosh.felosy_project.dtos.CreateAccountDto;
import com.codewithmosh.felosy_project.entities.Account;
import com.codewithmosh.felosy_project.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {

    private AccountRepository accountRepository;
    private UserRepository userRepository;

    public Account create(CreateAccountDto dto) {
        User user = userRepository.findUserById(dto.getUserId());
        Account account = new Account();
        account.setName(dto.getName());  // Uses name field
        account.setBalance(dto.getBalance());
        account.setUser(user);

        return accountRepository.save(account);
    }

    public Optional<Account> findById(int id) {
        return accountRepository.findById(id);
    }

    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    public void delete(int id) {
        accountRepository.deleteById(id);
    }
}