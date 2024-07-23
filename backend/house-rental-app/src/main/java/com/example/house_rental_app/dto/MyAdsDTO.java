package com.example.house_rental_app.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MyAdsDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "my_id", nullable = false)
    private UserDTO userDTO;

    @Column(name = "sellerName", nullable = false)
    private String sellerName;

    @Column(name = "towerName", nullable = false)
    private String towerName;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "landmark" , nullable = false)
    private String landMark;

    @Column(name = "carpetArea", nullable = false)
    private Integer carpetArea;

    @Column(name = "town", nullable = false)
    private String town;

    @Column(name = "bhk", nullable = false)
    private Integer bhk;

    @Column(name = "furnished", nullable = false)
    private String furnished;

    @Column(name = "ownerType", nullable = false)
    private String ownerType;

    @Column(name = "city" ,nullable = false)
    private String city;

    @Column(name = "floorNo", nullable = false)
    private Long floorNo;

    @Column(name = "totalFloors", nullable=false)
    private Long totalFloors;

    @Column(name = "parking", nullable=false)
    private String parking;

    @Column(name = "phoneNo", nullable=false)
    private Long phoneNo;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "construction", nullable = false)
    private String construction;
}
