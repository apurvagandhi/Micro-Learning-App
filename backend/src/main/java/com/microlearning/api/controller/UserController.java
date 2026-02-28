// package com.microlearning.api.controller;

// /*Spring Boot Framework */
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PatchMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// /* Request Variables */
// import com.microlearning.api.service.UserService;
// import com.microlearning.api.dto.UserResponse;
// import com.microlearning.api.dto.UpdateProfileRequest;
// import com.microlearning.api.model.User;

// /* Future Methods: PATCH /users/profile */

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     /*Find one instance of the UserService class */
//     @Autowired
//     private UserService userService;
    
//     /* GET Request: Get Profile Information */ 
//     @GetMapping("/profile")
//     /*Grab one instance from the Accounts Table --> Filtered through DTO */
//     public UserResponse getUserProfile(){
//         /*Send http request foward to UserService */
//         return userService.getUserProfile();
//     }

//     /*PATCH Request: Update Profile Information --> Filtered through DTO */
//     @PatchMapping("/profile")
//     public UserResponse patchUserPorfile(@RequestBody UpdateProfileRequest request){
//         return userService.updateUserProfile(request);
//     }

//     /* DEL Request: Delete Profile Information */ 
//     @DeleteMapping("/profile")
//     public void deleteUserProfile(){
//         /*Send http request foward to UserService --> uses JWT token to get current User */
//         userService.deleteUserProfile();
//     }
// }
package com.microlearning.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.microlearning.api.service.UserService;
import com.microlearning.api.dto.UpdateProfileRequest;
import com.microlearning.api.dto.UserResponse;
import com.microlearning.api.dto.UsersListResponse;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    /* GET /users/:id — Get profile information */
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserProfile(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserProfile(id));
    }

    /* PUT /users/:id — Update profile information */
    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUserProfile(
            @PathVariable Long id,
            @RequestBody UpdateProfileRequest request) {
        return ResponseEntity.ok(userService.updateUserProfile(id, request));
    }

    /* DELETE /users/:id — Delete a user */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteUserProfile(@PathVariable Long id) {
        userService.deleteUserProfile(id);
        return ResponseEntity.ok(Map.of("message", "User deleted successfully"));
    }

    /* GET /users?skip=0&take=10 — List users (Admin) */
    @GetMapping
    public ResponseEntity<UsersListResponse> listUsers(
            @RequestParam(defaultValue = "0") int skip,
            @RequestParam(defaultValue = "10") int take) {
        return ResponseEntity.ok(userService.listUsers(skip, take));
    }
}