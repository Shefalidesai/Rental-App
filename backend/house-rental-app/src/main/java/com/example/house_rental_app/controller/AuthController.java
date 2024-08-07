package com.example.house_rental_app.controller;

import com.example.house_rental_app.config.UserAuthProvider;
import com.example.house_rental_app.dto.*;
import com.example.house_rental_app.userService.MyAdsService;
import com.example.house_rental_app.userService.SavedAdsService;
import com.example.house_rental_app.userService.UserService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;
    private final SavedAdsService savedAdsService;
    private final MyAdsService myAdsService;

    @Transactional
    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        UserDTO userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthProvider.createToken(userDto));
        return ResponseEntity.ok(userDto);
    }

    @Transactional
    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@RequestBody @Valid SignUpDto user) {
        UserDTO createdUser = userService.register(user);
        createdUser.setToken(userAuthProvider.createToken(createdUser));
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
    }

    @GetMapping("/firstName/{firstName}")
    public UserDTO getFirstName(@PathVariable String firstName){
        return userService.findByFN(firstName);
    }

    @GetMapping("/login/{login}/firstName")
    public ResponseEntity<String> getNameAfterLogin(@PathVariable String login){
        return ResponseEntity.ok( userService.getFirstNameByUsername(login));
    }

    @GetMapping("/login/{login}/id")
    public ResponseEntity<Long> getLoginId(@PathVariable String login){
        return ResponseEntity.ok( userService.getFirstNameById(login));
    }

    @Transactional
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

    @PostMapping("/login/saveMyAds")
    public ResponseEntity<MyAdsDTO> saveMyAds(@RequestBody MyAdsDTO myAdsDTO, @RequestParam String login) {
        MyAdsDTO myAdsDTO1=myAdsService.myAds(myAdsDTO,login);
        return ResponseEntity.ok(myAdsDTO1);
    }

    @GetMapping("/login/getMyAds")
    public ResponseEntity<List<MyAdsDTO>> getMyAds(@RequestParam String login) {
        List<MyAdsDTO> myAdsDTOList = myAdsService.getMyAds(login);
        return ResponseEntity.ok(myAdsDTOList);
    }
}
