package com.example.house_rental_app.controller;


import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.userService.HomeSaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/homes")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeSaleController {

    private final HomeSaleService homeSaleService;

    @GetMapping
    public List<HomeSale> getALLSales(){
       return homeSaleService.getAllSale();
    }

    @GetMapping("/{id}")
    public HomeSale getSalesById(@PathVariable Long id){
        return homeSaleService.getSaleId(id);
    }

    @GetMapping("/construction/{construction}")
    public List<HomeSale> getHomeSaleByConstruction(@PathVariable String construction) {
        return homeSaleService.getByConstruction(construction);
    }

    @GetMapping("/category/{category}")
    public List<HomeSale> getHomeSaleByCategory(@PathVariable String category){
        return homeSaleService.getByCategory(category);
    }

    @PostMapping("/createAd")
    public HomeSale postHomeAds(@RequestBody HomeSale homeSale){
        return homeSaleService.saveSale(homeSale);
    }

    @DeleteMapping("/{id}")
    public void deleteHomeSale(@PathVariable Long id){
        homeSaleService.deleteSale(id);
    }


}
