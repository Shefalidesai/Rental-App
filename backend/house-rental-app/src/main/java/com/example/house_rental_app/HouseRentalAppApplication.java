package com.example.house_rental_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class HouseRentalAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(HouseRentalAppApplication.class, args);
	}

}
