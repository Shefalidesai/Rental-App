package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.HomeSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeSaleRepo extends JpaRepository<HomeSale, Long> {
    List<HomeSale> findByConstruction(String construction);
    List<HomeSale> findByCategory(String category);
    List<HomeSale> findByCity(String city);
    List<HomeSale> findByParking(String parking);
    List<HomeSale> findByBhk(Integer bhk);
    List<HomeSale> findByFurnished(String furnished);
}
