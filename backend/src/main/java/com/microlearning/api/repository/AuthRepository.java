package com.microlearning.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microlearning.api.model.AuthToken;

@Repository
public interface AuthRepository extends JpaRepository<AuthToken, Long> {

  Optional<AuthToken> findByToken(String token);

  void deleteByUserId(Long userId);
}