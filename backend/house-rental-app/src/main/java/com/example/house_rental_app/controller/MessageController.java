package com.example.house_rental_app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

@RestController

public class MessageController {

    //get mapping is a end point which gets our data and "/" is localhost8080/message at this api we get the messages
    @GetMapping("/messages")

    public ResponseEntity<List<String>> messages(){
        return ResponseEntity.ok(Arrays.asList("first","Second"));

    }
}
