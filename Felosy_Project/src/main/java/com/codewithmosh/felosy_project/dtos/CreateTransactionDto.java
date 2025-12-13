package com.codewithmosh.felosy_project.dtos;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class CreateTransactionDto {
    private BigDecimal amount;
    private String notes;  // Changed from description to notes
    private String transactionDate;
    private String type;
    private int accountId;
    private Integer categoryId;  // Optional - can be null
    private int userId;  // Transaction needs userId
}