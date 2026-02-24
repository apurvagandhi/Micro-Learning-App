package com.microlearning.api.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microlearning.api.service.AuthService;
import com.microlearning.api.dto.AuthResponse;
import com.microlearning.api.dto.LoginRequest;
import com.microlearning.api.dto.RegisterRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/register")
  public AuthResponse register(@RequestBody RegisterRequest req) {
    return authService.register(req);
  }

  @PostMapping("/login")
  public AuthResponse login(@RequestBody LoginRequest req) {
    return authService.login(req);
  }
}