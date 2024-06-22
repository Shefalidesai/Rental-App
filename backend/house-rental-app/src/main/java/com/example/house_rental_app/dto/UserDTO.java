package com.example.house_rental_app.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@CrossOrigin(origins = "http://localhost:4200/")
public class UserDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String login;
    private String token;
}
