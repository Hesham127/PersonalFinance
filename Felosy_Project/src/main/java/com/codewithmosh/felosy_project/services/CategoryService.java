package com.codewithmosh.felosy_project.services;

import com.codewithmosh.felosy_project.Repositories.CategoryRepository;
import com.codewithmosh.felosy_project.Repositories.UserRepository;
import com.codewithmosh.felosy_project.dtos.CreateCategoryDto;
import com.codewithmosh.felosy_project.entities.Category;
import com.codewithmosh.felosy_project.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public Category create(CreateCategoryDto dto) {
        User user = userRepository.findUserById(dto.getUserId());
        Category category = new Category();
        category.setName(dto.getName());
        category.setType(dto.getType());
        category.setUser(user);

        return categoryRepository.save(category);
    }

    public Optional<Category> findById(int id) {
        return categoryRepository.findById(id);
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public void delete(int id) {
        categoryRepository.deleteById(id);
    }
}