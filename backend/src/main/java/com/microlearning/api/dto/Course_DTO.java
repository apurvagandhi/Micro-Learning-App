package com.microlearning.api.dto;


import java.time.LocalDateTime;


public class Course_DTO {


//   <!-- Front-end DTO -->
public class courseRequest{
public long course_id;
public String title;
public String lesson_content;
public String slug;
public LocalDateTime created_at;
public LocalDateTime updated_at;
public LocalDateTime published_at;


}


//   <!-- Back-end DTO -->
public class courseResponse {
public long course_id;
public String title;
public String lesson_content;
public String slug;
public LocalDateTime created_at;
public LocalDateTime updated_at;
public LocalDateTime published_at;
}
  
}
