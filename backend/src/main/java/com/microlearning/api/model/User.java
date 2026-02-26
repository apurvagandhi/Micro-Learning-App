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
}
