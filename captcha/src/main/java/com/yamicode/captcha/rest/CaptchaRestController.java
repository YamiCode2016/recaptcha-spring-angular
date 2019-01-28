package com.yamicode.captcha.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
public class CaptchaRestController {
    @RequestMapping(value="verify/captcha")
    public ResponseEntity<?> validateReCaptha(@RequestBody Map<String, String> captchaMap){
        
    }
}
