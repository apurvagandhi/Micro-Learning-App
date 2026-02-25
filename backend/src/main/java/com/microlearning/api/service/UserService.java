package com.microlearning.api.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microlearning.api.repository.UserRepository;
import com.microlearning.api.dto.UserResponse;
import com.microlearning.api.model.User;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

// @Service
// public class UserService {
//     String subject = SecurityContextHolder.getContext().getAuthentication().getName();
//     Long userId = Long.parseLong(subject);

//     @Autowired
//     private UserRepository userRepository;

//     // User currentUser = getCurrentUser();
    
//     /* */
//     public void deleteUserProfile(){
//         // userRepository.deleteById(currentUser);
//     }

//     public UserResponse updateUserProfile(String username, String email){

//     }

//     public UserResponse getUserProfile(){
//         User user = getCurrentUserID(userId);

//         return new UserResponse(
//             user.getName(),
//             user.getEmail()
//         );
//     }

//     /*Grabs Current User */
//     public User getCurrentUserID(){
//        return userRepository.findById(userId).orElse(null);
//     }


// }

