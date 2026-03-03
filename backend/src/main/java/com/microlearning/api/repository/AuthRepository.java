package com.microlearning.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microlearning.api.model.AuthToken;

public interface AuthRepository extends JpaRepository<AuthToken, Long> {
  void deleteByUserId(Long userId);

  Optional<AuthToken> findByToken(String token);

  boolean existsByToken(String token);

  // add these if you use them anywhere
  Optional<AuthToken> findByUserId(Long userId);
  boolean existsByUserId(Long userId);
}