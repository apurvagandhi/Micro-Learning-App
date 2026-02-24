package com.microlearning.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/* 
Profile
get profile
GET /users/me --> user clicks on profile image

update profile
PATCH /users/me --> user change sinfo on file

delete account
DELETE /users/me --> user deletes account

preferences
PATCH /users/me/preferences --> user preferences(i.e light mode/dark mode)*/

@RestController
@RequestMapping("/api/users")
public class UserController {

    
}
