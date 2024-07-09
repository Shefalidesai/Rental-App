package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.SavedAds;
import com.example.house_rental_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SavedAdsRepo extends JpaRepository<SavedAds,Long> {
    List<SavedAds> findByUser(User user);
}
