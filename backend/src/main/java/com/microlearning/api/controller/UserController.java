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
