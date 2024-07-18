package com.example.house_rental_app.controller;

import com.example.house_rental_app.entities.Image;
import com.example.house_rental_app.userService.ImageService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/images")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {

    private final ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<List<Image>> uploadImages(@RequestParam String sellerName,
                                                        @RequestParam("files") MultipartFile[] files) {
        try {
            List<Image> savedImages = imageService.saveImages(sellerName,files);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedImages);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<Image>> getImagesByGroupId(@PathVariable Long groupId) {
        List<Image> images = imageService.getImagesByGroupId(groupId);
        if (images.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(images);
    }

    @Transactional
    @GetMapping("/sellerName/{sellerName}")
    public List<Image> getImagesByGroupId(@PathVariable String sellerName) {
        return imageService.getImageBySellerName(sellerName);
    }

   /* @GetMapping("/sellerName/{sellerName}")
    public List<Image> getImages(
            @RequestParam Long groupId,
            @RequestParam String sellerName) {
        return imageService.getImagesBySellerName(groupId, sellerName);
    }*/

}
