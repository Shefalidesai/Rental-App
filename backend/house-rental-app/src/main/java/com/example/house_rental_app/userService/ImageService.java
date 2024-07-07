package com.example.house_rental_app.userService;

import com.example.house_rental_app.config.ImageUtil;
import com.example.house_rental_app.entities.Image;
import com.example.house_rental_app.repository.ImageRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepo imageRepo;

    public List<Image> saveImages(MultipartFile[] files) throws IOException {
        List<Image> images = new ArrayList<>();
        for (MultipartFile file : files) {
            Image image = new Image();
            image.setFileName(file.getOriginalFilename());
            image.setFileType(file.getContentType());
            image.setData(file.getBytes());
            images.add(imageRepo.save(image));
        }
        return images;
    }


}
