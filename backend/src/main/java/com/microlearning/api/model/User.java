package com.microlearning.api.model;
import jakarta.persistence.*;

import java.time.LocalDateTime;

/*Data Base Table */
@Entity
/*Data Base Table Name*/
@Table(name = "accounts")
public class User {

    /*PRIMARY KEY*/
    @Id
    /*Determine user_id generation by database SERIAL NUMBER*/
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    
    public Long getUser_id(){
        return user_id;
    }

    /*Columns */
    private String username;
    private String password;
    private String email;
    private LocalDateTime created_at;
    private LocalDateTime last_login;

    // ===== TABIYA'S CHANGES TO USER.JAVA (PLEASE REVIEW) =====

    // Alias so AuthService user.getId() works
    public Long getId() {
        return user_id;
    }

    // Needed setters for AuthService.register()
    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // AuthService expects passwordHash.
    // Keep Serenity's "password" field and store the hash there.
    public void setPasswordHash(String passwordHash) {
        this.password = passwordHash;
    }

    // Needed getters for AuthService.login() and response
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return password;
    }

    // Optional, keeps naming usable too
    public void setPassword(String password) {
        this.password = password;
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
}