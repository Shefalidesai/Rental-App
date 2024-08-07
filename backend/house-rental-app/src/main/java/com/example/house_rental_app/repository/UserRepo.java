package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
    Optional<User> findByFirstName(String firstName);
    Optional<User> findByLastName(String lastName);

}
