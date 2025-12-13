package com.codewithmosh.felosy_project.dtos;

import lombok.Value;

import java.io.Serializable;
import java.time.Instant;

/**
 * DTO for {@link com.codewithmosh.felosy_project.entities.User}
 */
@Value
public class UserDto implements Serializable {
    int id;
    String name;
    String email;
    Instant createdAt;
}