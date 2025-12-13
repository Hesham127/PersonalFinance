package com.codewithmosh.felosy_project.Repositories;

import com.codewithmosh.felosy_project.dtos.UserDto;
import com.codewithmosh.felosy_project.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    UserDto findByEmail(String email);
    UserDto findById(int id);
    User findUserById(int id);
    UserDto findByEmailAndPasswordHash(String email, String passwordHash);
}
