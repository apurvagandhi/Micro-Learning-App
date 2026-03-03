package com.microlearning.api.repository;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microlearning.api.model.Course;


@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
  
}
