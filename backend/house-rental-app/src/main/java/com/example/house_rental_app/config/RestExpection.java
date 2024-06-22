package com.example.house_rental_app.config;


import com.example.house_rental_app.dto.ErrorDto;
import com.example.house_rental_app.exceptions.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExpection {

    @ExceptionHandler(value = {AppException.class})
    @ResponseBody

    public ResponseEntity<ErrorDto> handleException(AppException ex){
        return ResponseEntity.
                status(ex.getHttpStatus()).body(new ErrorDto(ex.getMessage()));
    }
}
