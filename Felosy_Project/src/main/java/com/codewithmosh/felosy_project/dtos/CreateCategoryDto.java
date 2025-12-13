package com.codewithmosh.felosy_project.dtos;

import lombok.Data;

@Data
public class CreateCategoryDto {
    private String name;
    private String type;
    private int userId;
}
