package com.codewithmosh.felosy_project;

import com.codewithmosh.felosy_project.entities.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.codewithmosh.felosy_project.services.UserService;

@SpringBootApplication
public class FelosyProjectApplication {

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(FelosyProjectApplication.class, args);

        UserService userService = context.getBean(UserService.class);


    }
}
