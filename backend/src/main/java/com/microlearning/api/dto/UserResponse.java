package com.microlearning.api.dto;

import java.time.LocalDateTime;

/* Note: How back-end should format data sent back up to front-end */
public class UserResponse {
    public Long id;
    public String email;
    public String username;
    public String bio;
    public String avatar;
    public LocalDateTime createdAt;
    public LocalDateTime updatedAt;

    // Constructor for GET profile (no updatedAt)
    public UserResponse(Long id, String email, String username, String bio, String avatar, LocalDateTime createdAt) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.bio = bio;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }

    // Constructor for PUT profile (includes updatedAt)
    public UserResponse(Long id, String username, String bio, LocalDateTime updatedAt) {
        this.id = id;
        this.username = username;
        this.bio = bio;
        this.updatedAt = updatedAt;
    }

    // Default constructor (needed for list responses / flexibility)
    public UserResponse() {}
}