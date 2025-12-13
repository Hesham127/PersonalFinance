package com.codewithmosh.felosy_project.services;

import com.codewithmosh.felosy_project.Repositories.UserRepository;
import com.codewithmosh.felosy_project.dtos.UserDto;
import com.codewithmosh.felosy_project.entities.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;

    public UserDto createUser(User user){
        User saved = userRepository.save(user);
        return new UserDto(
                saved.getId(),
                saved.getName(),
                saved.getEmail(),
                saved.getCreatedAt()
        );
    }

    public UserDto findUserByEmail(String Email) {
        return userRepository.findByEmail(Email);
    }

    public UserDto findUserById(int id) {
        return userRepository.findById(id);
    }

    public List<UserDto> findAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserDto(user.getId() , user.getName() , user.getEmail(),user.getCreatedAt()))
                .toList();
    }

    public UserDto loginUser(String email, String password) {
        return userRepository.findByEmailAndPasswordHash(email, password);
    }
}