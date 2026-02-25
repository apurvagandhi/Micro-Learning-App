package com.microlearning.api.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
    if (userRepository.existsByEmail(req.email)) {
      throw new IllegalArgumentException("email already exists");
    }

    User user = new User();
    user.setUsername(req.username);
    user.setEmail(req.email);
    user.setPasswordHash(passwordEncoder.encode(req.password));

    userRepository.save(user);

    return new AuthResponse("dummy-token", user.getUsername());
  }

  public AuthResponse login(LoginRequest req) {
    User user = userRepository.findByEmail(req.email)
      .orElseThrow(() -> new IllegalArgumentException("invalid credentials"));

    boolean ok = passwordEncoder.matches(req.password, user.getPasswordHash());
    if (!ok) {
      throw new IllegalArgumentException("invalid credentials");
    }

    return new AuthResponse("dummy-token", user.getUsername());
  }
}