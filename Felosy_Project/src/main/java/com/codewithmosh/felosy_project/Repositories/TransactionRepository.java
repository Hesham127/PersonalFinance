package com.codewithmosh.felosy_project.Repositories;

import com.codewithmosh.felosy_project.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
}