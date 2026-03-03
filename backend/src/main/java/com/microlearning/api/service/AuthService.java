package com.microlearning.api.service;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.microlearning.api.dto.AuthResponse;
import com.microlearning.api.dto.LoginRequest;
import com.microlearning.api.dto.RegisterRequest;
import com.microlearning.api.model.User;
import com.microlearning.api.repository.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public AuthResponse register(RegisterRequest req) {
    if (req == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid request");
    }
    if (req.getEmail() == null || req.getEmail().isBlank()
        || req.getUsername() == null || req.getUsername().isBlank()
        || req.getPassword() == null || req.getPassword().isBlank()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "missing fields");
    }

    if (userRepository.existsByEmail(req.getEmail())) {
      throw new ResponseStatusException(HttpStatus.CONFLICT, "email already exists");
    }

    User u = new User();
    u.setUsername(req.getUsername());
    u.setEmail(req.getEmail());

    // store hashed password
    u.setPasswordHash(passwordEncoder.encode(req.getPassword()));

    userRepository.save(u);

    String refreshToken = UUID.randomUUID().toString();
    return new AuthResponse(refreshToken, u.getUsername());
  }

  public AuthResponse login(LoginRequest req) {
    if (req == null) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid request");
    }
    if (req.getEmail() == null || req.getEmail().isBlank()
        || req.getPassword() == null || req.getPassword().isBlank()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "missing fields");
    }

    User u = userRepository.findByEmail(req.getEmail())
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "invalid credentials"));

    if (!passwordEncoder.matches(req.getPassword(), u.getPasswordHash())) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "invalid credentials");
    }

    String refreshToken = UUID.randomUUID().toString();
    return new AuthResponse(refreshToken, u.getUsername());
  }
}