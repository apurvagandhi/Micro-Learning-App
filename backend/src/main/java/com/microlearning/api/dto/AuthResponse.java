package com.microlearning.api.dto;

public class AuthResponse {
  public String refreshToken;
  public String username;

  public AuthResponse(String refreshToken, String username) {
    this.refreshToken = refreshToken;
    this.username = username;
  }
}