package com.microlearning.api.model;
import jakarta.persistence.*;

import java.time.LocalDateTime;

/* Data Base Table */
@Entity
/* Data Base Table Name */
@Table(name = "accounts")
public class User {

    /* PRIMARY KEY */
    @Id
    /* Determine userId generation by database SERIAL NUMBER */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")   // maps Java field "userId" → DB column "user_id"
    private Long userId;        // renamed from user_id to userId

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    // Alias so AuthService user.getId() works
    public Long getId() {
        return userId;
    }

    /* Columns */
    private String username;
    private String password;
    private String email;
    private String bio;
    private String avatar;
    private LocalDateTime created_at;
    private LocalDateTime last_login;
    private LocalDateTime updated_at;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return password;
    }

    public void setPasswordHash(String passwordHash) {
        this.password = passwordHash;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getLast_login() {
        return last_login;
    }

    public void setLast_login(LocalDateTime last_login) {
        this.last_login = last_login;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }
}