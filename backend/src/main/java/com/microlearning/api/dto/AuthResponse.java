package com.microlearning.api.dto;

public class AuthResponse {
    private String refreshToken;
    private String username;

    public AuthResponse() {}

    public AuthResponse(String refreshToken, String username) {
        this.refreshToken = refreshToken;
        this.username = username;
    }

    public String getRefreshToken() { return refreshToken; }
    public void setRefreshToken(String refreshToken) { this.refreshToken = refreshToken; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}