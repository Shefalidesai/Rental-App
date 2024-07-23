package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.MyAds;
import com.example.house_rental_app.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyAdsRepo extends JpaRepository<MyAds,Long> {
    List<MyAds> findByUser(User user);
}
