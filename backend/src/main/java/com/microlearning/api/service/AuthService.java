package com.microlearning.api.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.microlearning.api.dto.AuthResponse;
import com.microlearning.api.dto.LoginRequest;
import com.microlearning.api.dto.RegisterRequest;
import com.microlearning.api.model.AuthToken;
import com.microlearning.api.model.User;
import com.microlearning.api.repository.AuthRepository;
import com.microlearning.api.repository.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final AuthRepository authRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthService(UserRepository userRepository,
                     AuthRepository authRepository,
                     PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.authRepository = authRepository;
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

    user = userRepository.save(user);

    String refresh = UUID.randomUUID().toString();
    Instant exp = Instant.now().plus(30, ChronoUnit.DAYS);

    authRepository.save(new AuthToken(user.getId(), refresh, exp));

    return new AuthResponse(refresh, user.getUsername());
  }

  public AuthResponse login(LoginRequest req) {
    User user = userRepository.findByEmail(req.email)
      .orElseThrow(() -> new IllegalArgumentException("invalid credentials"));

    if (!passwordEncoder.matches(req.password, user.getPasswordHash())) {
      throw new IllegalArgumentException("invalid credentials");
    }

    String refresh = UUID.randomUUID().toString();
    Instant exp = Instant.now().plus(30, ChronoUnit.DAYS);

    authRepository.save(new AuthToken(user.getId(), refresh, exp));

    return new AuthResponse(refresh, user.getUsername());
  }
}