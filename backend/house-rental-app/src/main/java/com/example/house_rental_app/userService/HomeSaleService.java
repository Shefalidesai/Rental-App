package com.example.house_rental_app.userService;

import com.example.house_rental_app.dto.HomeSaleDTO;
import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.mappers.HomeSaleMapper;
import com.example.house_rental_app.repository.HomeSaleRepo;
import com.example.house_rental_app.repository.ImageRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class HomeSaleService {
       private final HomeSaleRepo homeSaleRepo;
        private final HomeSaleMapper homeSaleMapper;
        private final ImageRepo imageRepo;

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

  /*  private final  HomeSaleMapper homeSaleMapper;
    private final HomeSaleRepo homeSaleRepo;

    public HomeSaleDTO createHomeSale(HomeSaleDTO homeSaleDTO) {
       HomeSale homeSale=homeSaleMapper.toEntity(homeSaleDTO);
       HomeSale savedHomeSale=homeSaleRepo.save(homeSale);
       return homeSaleMapper.toDTO(savedHomeSale);
    }

    public List<HomeSaleDTO> getAllHomeSales() {
        List<HomeSale> homeSales = homeSaleRepo.findAll();
        return homeSales.stream().map(homeSaleMapper::toDTO).collect(Collectors.toList());
    }

    public HomeSaleDTO getHomeSaleById(Long id) {
        Optional<HomeSale> homeSale = homeSaleRepo.findById(id);
        return homeSale.map(homeSaleMapper::toDTO).orElse(null);
    }

    public HomeSaleDTO updateHomeSale(Long id, HomeSaleDTO homeSaleDTO) {
        Optional<HomeSale> optionalHomeSale = homeSaleRepo.findById(id);
        if (optionalHomeSale.isPresent()) {
            HomeSale homeSale = homeSaleMapper.toEntity(homeSaleDTO);
            homeSale.setId(id);
            HomeSale updatedHomeSale = homeSaleRepo.save(homeSale);
            return homeSaleMapper.toDTO(updatedHomeSale);
        } else {
            return null;
        }
    }

    public void deleteHomeSale(Long id) {
        homeSaleRepo.deleteById(id);
    }*/



