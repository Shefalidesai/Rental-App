package com.example.house_rental_app.repository;

import com.example.house_rental_app.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImageRepo extends JpaRepository<Image, Long> {
    List<Image> findByGroupId(Long groupId);
    List<Image> findByGroupIdAndSellerName(Long groupId, String sellerName);
    List<Image> findBySellerName(String sellerName);
}
