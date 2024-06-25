package com.example.house_rental_app.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name = "app_sale")
public class HomeSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @Column(name = "area", nullable = false)
    private String area;

    @Column(name = "bhk", nullable = false)
    private String bhk;

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

    @OneToMany(mappedBy = "homeSale", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Image> images;

}
