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

   @GetMapping("/all")
    public List<HomeSale> getALLSales(){
       return homeSaleService.getAllSale();
    }

    @GetMapping("/{id}")
    public HomeSale getSalesById(@PathVariable Long id){
        return homeSaleService.getSaleId(id);
    }


    @GetMapping("/sellerName/{sellerName}")
    public List<HomeSale> getAdByLogin(@PathVariable String sellerName){
       return homeSaleService.getSellerName(sellerName);
    }

    @GetMapping("/construction/{construction}")
    public List<HomeSale> getHomeSaleByConstruction(@PathVariable String construction) {
        return homeSaleService.getByConstruction(construction);
    }

    
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

    @DeleteMapping("/{id}")
    public void deleteHomeSale(@PathVariable Long id){
        homeSaleService.deleteHomeSale(id);
    }

    @PostMapping("/saveAd")
    public HomeSale createHomeSale(@RequestBody HomeSale homeSale) {
        return homeSaleService.saveSale(homeSale);
    }

}





