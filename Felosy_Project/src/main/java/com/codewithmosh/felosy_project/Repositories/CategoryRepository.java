package com.codewithmosh.felosy_project.Repositories;

import com.codewithmosh.felosy_project.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}