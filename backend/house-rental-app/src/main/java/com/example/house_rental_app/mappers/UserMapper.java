package com.example.house_rental_app.mappers;


import com.example.house_rental_app.dto.SignUpDto;
import com.example.house_rental_app.dto.UserDTO;
import com.example.house_rental_app.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")

public interface UserMapper {
    UserDTO toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
}
