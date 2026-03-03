package com.microlearning.api.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

import org.springframework.stereotype.Component;
import com.microlearning.api.model.User;

@Component
public class JwtUtil {

    private String SECRET_KEY = "secretsecretsecretsecretsecret";

    public String generateToken(User user) {

        return Jwts.builder()
                .setSubject(String.valueOf(user.getId()))
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}