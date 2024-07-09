package com.example.house_rental_app.mappers;

import com.example.house_rental_app.dto.HomeSaleDTO;
import com.example.house_rental_app.entities.HomeSale;
import com.example.house_rental_app.entities.Image;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface HomeSaleMapper {

   /* @Mapping(target = "image", ignore = true)
    HomeSale toEntity(HomeSaleDTO homeSaleDTO);

    @AfterMapping
    default void handleImages(HomeSaleDTO dto, @MappingTarget HomeSale homeSale) {
        List<Image> images = dto.getImages().stream().map(file -> {
            Image image = new Image();
            image.setFileName(file.getOriginalFilename());
            image.setFileType(file.getContentType());
            try {
                image.setData(file.getBytes());
            } catch (Exception e) {
                e.printStackTrace();
            }
            image.setHomeSale(homeSale);
            return image;
        }).collect(Collectors.toList());
        homeSale.setImage(images);
    }

    @Mapping( target = "images", ignore = true)
    HomeSaleDTO toDTO(HomeSale entity);

    default List<MultipartFile> map(List<Image> images) {
        // Return null or handle as needed since MultipartFile can't be mapped back easily
        return null;
    }

*/

}
