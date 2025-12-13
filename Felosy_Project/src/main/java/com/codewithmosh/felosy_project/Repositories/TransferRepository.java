package com.codewithmosh.felosy_project.Repositories;

import com.codewithmosh.felosy_project.entities.Transfer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransferRepository extends JpaRepository<Transfer, Integer> {
}