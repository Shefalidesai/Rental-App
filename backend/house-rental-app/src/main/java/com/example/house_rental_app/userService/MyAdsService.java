package com.example.house_rental_app.userService;


import com.example.house_rental_app.dto.MyAdsDTO;
import com.example.house_rental_app.dto.SavedAdsDTO;
import com.example.house_rental_app.entities.MyAds;
import com.example.house_rental_app.entities.SavedAds;
import com.example.house_rental_app.entities.User;
import com.example.house_rental_app.mappers.MyAdsMapper;
import com.example.house_rental_app.repository.MyAdsRepo;
import com.example.house_rental_app.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MyAdsService {

    private final MyAdsRepo myAdsRepo;
    private final UserRepo userRepo;
    private final MyAdsMapper myAdsMapper;

    public MyAdsDTO myAds(MyAdsDTO myAdsDTO, String login){
        User user = userRepo.findByLogin(login).orElseThrow(() -> new RuntimeException("User not found with login: " + login));
        MyAds myAds = myAdsMapper.toEntity(myAdsDTO);
        myAds.setUser(user);
        MyAds myAds1 = myAdsRepo.save(myAds);
        return myAdsMapper.toDTO(myAds1);
    }

    public List<MyAdsDTO> getMyAds(String login){
        User user=userRepo.findByLogin(login).orElseThrow(() -> new RuntimeException("User not found with login: " + login));
        return myAdsRepo.findByUser(user).stream()
                .map(myAdsMapper::toDTO)
                .collect(Collectors.toList());
    }
}
