package com.example.house_rental_app.dto;

import com.example.house_rental_app.entities.SavedAds;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String login;
    private String token;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<SavedAds> savedAds;


}
