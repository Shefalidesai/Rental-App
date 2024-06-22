package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepo extends JpaRepository<Image, Long> {
}
