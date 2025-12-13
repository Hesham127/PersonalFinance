package com.codewithmosh.felosy_project.dtos;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class CreateAccountDto {
    private String name;
    private BigDecimal balance;
    private int userId;
}