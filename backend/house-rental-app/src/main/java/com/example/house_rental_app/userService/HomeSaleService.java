package com.example.house_rental_app.userService;

import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.repository.HomeSaleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Service
@CrossOrigin(origins = "http://localhost:4200")
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

        public HomeSale saveSale(HomeSale homeSale){
            return homeSaleRepo.save(homeSale);
        }

        public void deleteSale(Long id){
            homeSaleRepo.deleteById(id);
        }

    public void saveFile(MultipartFile file) {
        String uploadDir = "uploads/";
        File uploadDirectory = new File(uploadDir);
        if (!uploadDirectory.exists()) {
            uploadDirectory.mkdirs();
        }
        try {
            File uploadedFile = new File(uploadDir + file.getOriginalFilename());
            file.transferTo(uploadedFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


