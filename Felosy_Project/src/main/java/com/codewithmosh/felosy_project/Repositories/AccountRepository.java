package com.codewithmosh.felosy_project.Repositories;

import com.codewithmosh.felosy_project.entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    public Account findAccountsById(int id);

}