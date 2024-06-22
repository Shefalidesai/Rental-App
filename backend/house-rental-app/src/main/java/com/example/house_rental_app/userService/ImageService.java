package com.example.house_rental_app.userService;

import com.example.house_rental_app.config.ImageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageUtil imageUtil;

    public String uploadImage(MultipartFile file) throws IOException {
        return imageUtil.saveImage(file);
    }

    public byte[] getImage(String filename) throws IOException {
        return imageUtil.getImage(filename);
    }

    public boolean deleteImage(String filename) {
        return imageUtil.deleteImage(filename);
    }

}
