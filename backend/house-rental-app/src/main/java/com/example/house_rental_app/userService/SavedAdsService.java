package com.example.house_rental_app.userService;

import com.example.house_rental_app.dto.SavedAdsDTO;
import com.example.house_rental_app.dto.UserDTO;
import com.example.house_rental_app.entities.SavedAds;
import com.example.house_rental_app.entities.User;
import com.example.house_rental_app.exceptions.AppException;
import com.example.house_rental_app.mappers.SavedAdsMapper;
import com.example.house_rental_app.repository.SavedAdsRepo;
import com.example.house_rental_app.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SavedAdsService {

    private final SavedAdsRepo savedAdsRepo;
    private final UserRepo userRepo;
    private final SavedAdsMapper savedAdsMapper;

    public SavedAdsDTO saveLiked(SavedAdsDTO savedAdsDTO, String login){
        User user = userRepo.findByLogin(login).orElseThrow(() -> new RuntimeException("User not found with login: " + login));
        SavedAds savedAds = savedAdsMapper.toEntity(savedAdsDTO);
        savedAds.setUser(user);
        SavedAds savedAd = savedAdsRepo.save(savedAds);
        return savedAdsMapper.toDTO(savedAd);
    }

    public List<SavedAdsDTO> getsavedLike(String login){
        User user=userRepo.findByLogin(login).orElseThrow(() -> new RuntimeException("User not found with login: " + login));
        return savedAdsRepo.findByUser(user).stream()
                .map(savedAdsMapper::toDTO)
                .collect(Collectors.toList());
    }


}
