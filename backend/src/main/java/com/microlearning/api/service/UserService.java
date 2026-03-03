package com.microlearning.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microlearning.api.repository.UserRepository;
import com.microlearning.api.dto.UpdateProfileRequest;
import com.microlearning.api.dto.UserResponse;
import com.microlearning.api.dto.UsersListResponse;
import com.microlearning.api.model.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /* GET /users/:id — Get a user's profile by ID */
    public UserResponse getUserProfile(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        return new UserResponse(
            user.getId(),
            user.getEmail(),
            user.getUsername(),
            user.getBio(),
            user.getAvatar(),
            user.getCreatedAt()
        );
    }

    /* PUT /users/:id — Update a user's profile */
    public UserResponse updateUserProfile(Long id, UpdateProfileRequest request) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        // Only update fields that were provided (non-null)
        if (request.username != null) user.setUsername(request.username);
        if (request.bio != null) user.setBio(request.bio);
        if (request.avatar != null) user.setAvatar(request.avatar);

        user.setUpdatedAt(LocalDateTime.now());
        userRepository.save(user);

        return new UserResponse(
            user.getId(),
            user.getUsername(),
            user.getBio(),
            user.getUpdatedAt()
        );
    }

    /* DELETE /users/:id — Delete a user by ID */
    public void deleteUserProfile(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }

    /* GET /users?skip=0&take=10 — List all users (Admin) */
    public UsersListResponse listUsers(int skip, int take) {
        Page<User> page = userRepository.findAll(PageRequest.of(skip / take, take));

        List<UserResponse> userResponses = page.getContent().stream()
            .map(u -> new UserResponse(
                u.getId(),
                u.getEmail(),
                u.getUsername(),
                u.getBio(),
                u.getAvatar(),
                u.getCreatedAt()
            ))
            .collect(Collectors.toList());

        return new UsersListResponse(page.getTotalElements(), skip, take, userResponses);
    }
}