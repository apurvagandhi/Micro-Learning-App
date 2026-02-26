package com.microlearning.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microlearning.api.model.User;

/**
 * Serenity - feel free to change this. I am pushing this with minimal changes so the code
 * can compile and I can test locally.
 */
public interface UserRepository extends JpaRepository<User, Long> {
  boolean existsByEmail(String email);
  Optional<User> findByEmail(String email);
}
