package com.example.house_rental_app.controller;

import com.example.house_rental_app.dto.SavedAdsDTO;
import com.example.house_rental_app.userService.SavedAdsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SavedAdsController {}

    /*private final SavedAdsService savedAdsService;

    @PostMapping("/login/save")
    public ResponseEntity<SavedAdsDTO> saveLikeAds(@RequestBody SavedAdsDTO savedAdsDTO, @RequestParam String login) {
        SavedAdsDTO savedAdsDTO1=savedAdsService.saveLiked(savedAdsDTO,login);
        return ResponseEntity.ok(savedAdsDTO1);
    }

    @GetMapping("/login/savedAds")
    public ResponseEntity<List<SavedAdsDTO>> getSavedAds(@RequestParam String login) {
        List<SavedAdsDTO> savedAdsList = savedAdsService.getsavedLike(login);
        return ResponseEntity.ok(savedAdsList);
    }

}*/
