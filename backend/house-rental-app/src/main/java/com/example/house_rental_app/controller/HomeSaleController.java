package com.example.house_rental_app.controller;


import com.example.house_rental_app.dto.HomeSaleDTO;
import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.entities.Image;
import com.example.house_rental_app.mappers.HomeSaleMapper;
import com.example.house_rental_app.repository.HomeSaleRepo;
import com.example.house_rental_app.repository.ImageRepo;
import com.example.house_rental_app.userService.HomeSaleService;
import com.example.house_rental_app.userService.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/homes")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeSaleController {

    private final HomeSaleService homeSaleService;
    private final ImageService imageService;

   @GetMapping
    public List<HomeSale> getALLSales(){
       return homeSaleService.getAllSale();
    }

    @GetMapping("/{id}")
    public HomeSale getSalesById(@PathVariable Long id){
        return homeSaleService.getSaleId(id);
    }

    // new/old construction
    @GetMapping("/construction/{construction}")
    public List<HomeSale> getHomeSaleByConstruction(@PathVariable String construction) {
        return homeSaleService.getByConstruction(construction);
    }

    //buy/rent/pg/commercial
    @GetMapping("/category/{category}")
    public List<HomeSale> getHomeSaleByCategory(@PathVariable String category){
        return homeSaleService.getByCategory(category);
    }

    @GetMapping("/city/{city}")
    public List<HomeSale> getHomeSaleByCity(@PathVariable String city){
        return homeSaleService.getByCity(city);
    }

    @GetMapping("/bhk/{bhk}")
    public List<HomeSale> getByBHK(@PathVariable Integer bhk){
        return homeSaleService.getByBhk(bhk);
    }
    @GetMapping("/parking/{parking}")
    public List<HomeSale> getByParking(@PathVariable String parking){
        return homeSaleService.getByParking(parking);
    }

    @GetMapping("/furnished/{furnished}")
    public List<HomeSale> getByFurnishing(@PathVariable String furnished){
        return homeSaleService.getByFurnishing(furnished);
    }

    @PostMapping(value = "/createAd", consumes = {"multipart/form-data"})


    @DeleteMapping("/{id}")
    public void deleteHomeSale(@PathVariable Long id){
        homeSaleService.deleteHomeSale(id);
    }

  /*  @PostMapping( "/createAd")
    public ResponseEntity<HomeSaleDTO> createHomeSale(
            @RequestBody HomeSaleDTO homeSaleDTO,
            @RequestBody List<MultipartFile> images) {
        homeSaleDTO.setImages(images);
        HomeSaleDTO createdHomeSale = homeSaleService.createHomeSale(homeSaleDTO);
        return ResponseEntity.ok(createdHomeSale);
    }*/

}





