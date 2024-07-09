package com.example.house_rental_app.dto;


import com.fasterxml.jackson.annotation.JsonTypeInfo;
import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, include = JsonTypeInfo.As.PROPERTY, property = "type")
public class HomeSaleDTO {
    private String sellerName;
    private String towerName;
    private double price;
    private String address;
    private String landMark;
    private Integer carpetArea;
    private String town;
    private Integer bhk;
    private String furnished;
    private String ownerType;
    private String city;
    private Long floorNo;
    private Long totalFloors;
    private String parking;
    private Long phoneNo;
    private String category;
    private String construction;

    @OneToMany(mappedBy = "homeSale", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<MultipartFile> images;
}
