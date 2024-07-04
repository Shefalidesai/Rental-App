package com.example.house_rental_app.mappers;

import com.example.house_rental_app.dto.SavedAdsDTO;
import com.example.house_rental_app.entities.SavedAds;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SavedAdsMapper {


    SavedAdsDTO toDTO(SavedAds savedAds);

    @Mapping(target = "user", ignore = true)
    SavedAds toEntity(SavedAdsDTO savedAdsDTO);
}
