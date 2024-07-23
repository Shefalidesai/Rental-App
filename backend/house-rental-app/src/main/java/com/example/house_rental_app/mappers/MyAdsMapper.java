package com.example.house_rental_app.mappers;


import com.example.house_rental_app.dto.MyAdsDTO;
import com.example.house_rental_app.entities.MyAds;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MyAdsMapper {

    MyAdsDTO toDTO(MyAds myAds);

    @Mapping(target = "user", ignore = true)
    MyAds toEntity(MyAdsDTO myAdsDTO);
}
