package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.HomeSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeSaleRepo extends JpaRepository<HomeSale, Long> {
}
