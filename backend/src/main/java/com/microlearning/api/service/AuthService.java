package com.microlearning.api.service;

import org.springframework.stereotype.Service;

import com.microlearning.api.dto.AuthResponse;
import com.microlearning.api.dto.LoginRequest;
import com.microlearning.api.dto.RegisterRequest;

@Service
public class AuthService {

  public AuthResponse register(RegisterRequest req) {
    return new AuthResponse("dummy-token", req.username);
  }

  public AuthResponse login(LoginRequest req) {
    return new AuthResponse("dummy-token", "temp-user");
  }
}