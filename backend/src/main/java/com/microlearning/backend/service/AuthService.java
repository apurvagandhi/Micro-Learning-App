package com.microlearning.backend.service;

import org.springframework.stereotype.Service;

import com.microlearning.backend.dto.AuthResponse;
import com.microlearning.backend.dto.LoginRequest;
import com.microlearning.backend.dto.RegisterRequest;

@Service
public class AuthService {

  public AuthResponse register(RegisterRequest req) {
    return new AuthResponse("dummy-token", req.username);
  }

  public AuthResponse login(LoginRequest req) {
    return new AuthResponse("dummy-token", "temp-user");
  }
}