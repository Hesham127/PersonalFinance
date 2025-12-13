package com.codewithmosh.felosy_project.controllers;

import com.codewithmosh.felosy_project.services.TransferService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/api/transfers")
@AllArgsConstructor
public class TransferController {

    private final TransferService transferService;

    @PostMapping
    public ResponseEntity<Map<String, String>> transfer(@RequestBody TransferRequest request) {
        try {
            transferService.transfer(request.getFrom(), request.getTo(), request.getAmount());
            return new ResponseEntity<>(
                    Map.of("message", "Transfer successful"),
                    HttpStatus.OK
            );
        } catch (RuntimeException e) {
            return new ResponseEntity<>(
                    Map.of("error", e.getMessage()),
                    HttpStatus.BAD_REQUEST
            );
        }
    }

    @lombok.Data
    public static class TransferRequest {
        private int from;
        private int to;
        private BigDecimal amount;
    }
}
