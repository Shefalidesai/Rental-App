package com.example.house_rental_app.dto;

import org.springframework.web.bind.annotation.CrossOrigin;

public record SignUpDto(String firstName, String lastName, String login, char[] password) {
}
