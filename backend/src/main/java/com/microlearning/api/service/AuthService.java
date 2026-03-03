package com.microlearning.api.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microlearning.api.dto.AuthResponse;
import com.microlearning.api.dto.LoginRequest;
import com.microlearning.api.dto.RegisterRequest;
import com.microlearning.api.model.User;
import com.microlearning.api.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public AuthResponse register(RegisterRequest req) {
        if (req == null) {
            throw new IllegalArgumentException("invalid request");
        }
        if (req.getEmail() == null || req.getEmail().isBlank()) {
            throw new IllegalArgumentException("email required");
        }
        if (req.getUsername() == null || req.getUsername().isBlank()) {
            throw new IllegalArgumentException("username required");
        }
        if (req.getPassword() == null || req.getPassword().isBlank()) {
            throw new IllegalArgumentException("password required");
        }

        Optional<User> existing = userRepository.findByEmail(req.getEmail());
        if (existing.isPresent()) {
            throw new IllegalArgumentException("email already used");
        }

        User u = new User();
        u.setUsername(req.getUsername());
        u.setEmail(req.getEmail());
        u.setPassword(req.getPassword());

        userRepository.save(u);

        String refreshToken = UUID.randomUUID().toString();
        return new AuthResponse(refreshToken, u.getUsername());
    }

    public AuthResponse login(LoginRequest req) {
        if (req == null) {
            throw new IllegalArgumentException("invalid request");
        }
        if (req.getEmail() == null || req.getEmail().isBlank()) {
            throw new IllegalArgumentException("email required");
        }
        if (req.getPassword() == null || req.getPassword().isBlank()) {
            throw new IllegalArgumentException("password required");
        }

        User u = userRepository
                .findByEmail(req.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("invalid credentials"));

        if (u.getPassword() == null || !u.getPassword().equals(req.getPassword())) {
            throw new IllegalArgumentException("invalid credentials");
        }

        String refreshToken = UUID.randomUUID().toString();
        return new AuthResponse(refreshToken, u.getUsername());
    }
}