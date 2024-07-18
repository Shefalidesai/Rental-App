package com.example.house_rental_app.userService;

import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.repository.HomeSaleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service

public class HomeSaleService {
       private final HomeSaleRepo homeSaleRepo;

        public List<HomeSale> getAllSale(){
          return homeSaleRepo.findAll();

        }

        public HomeSale getSaleId(Long id){
            try {
                return homeSaleRepo.findById(id).orElse(null);
            }catch (Exception e){
                throw new RuntimeException("Failed to fetch homes by ID" + e.getMessage());
            }
        }

        public List<HomeSale> getByConstruction(String construction){
            return homeSaleRepo.findByConstruction(construction);
        }

        public List<HomeSale> getByCategory(String category){
            return homeSaleRepo.findByCategory(category);
        }

        public List<HomeSale> getByCity(String city){
            return homeSaleRepo.findByCity(city);
        }

        public List<HomeSale> getByBhk(Integer bhk){
            return homeSaleRepo.findByBhk(bhk);
        }

        public List<HomeSale> getByParking(String parking){
            return homeSaleRepo.findByParking(parking);
        }

        public List<HomeSale> getByFurnishing(String furnished){
            return homeSaleRepo.findByFurnished(furnished);
        }

        public HomeSale saveSale(HomeSale homeSale) {
            return homeSaleRepo.save(homeSale);
        }

        public void deleteHomeSale(Long id) {
            homeSaleRepo.deleteById(id);
        }
}
