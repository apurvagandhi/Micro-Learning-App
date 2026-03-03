package com.microlearning.api.dto;


import java.time.LocalDateTime;


public class Course_DTO {


//   <!-- Front-end DTO -->
public static class CourseRequest{
public long course_id;
public String title;
public String lesson_content;
public String slug;
public LocalDateTime created_at;
public LocalDateTime updated_at;
public LocalDateTime published_at;

public CourseRequest(){

}
//getters
    public Long getCourseId(){
        return course_id;
    }
    public String getTitle(){
        return title;
    }
    public String getSlug(){
        return slug;
    }
    public String getLessonContent(){
        return lesson_content;
    }
    public LocalDateTime getPublishedAt(){
        return published_at;
    }
    public LocalDateTime getCreatedAt(){
        return created_at;
    }
    public LocalDateTime getUpdatedAt(){
        return updated_at;
    }

    //Setters
    
    public void setTitle(String title){
        this.title = title;
    }
    public void setSlug(String slug){
        this.slug = slug;
    }
    public void setLessonContent(String lesson_content){
        this.lesson_content = lesson_content;
    }
    public void setPublishedAt(LocalDateTime published_at){
        this.published_at = published_at;
    }
    public void setUpdatedAt(LocalDateTime updated_at){
        this.updated_at = updated_at;
    }


}


//   <!-- Back-end DTO -->
public static class CourseResponse {

    public Long course_id;
    public String title;
    public String lesson_content;
    public String slug;
    public LocalDateTime created_at;
    public LocalDateTime updated_at;
    public LocalDateTime published_at;

    public CourseResponse(Long course_id,String title,String lesson_content,String slug,LocalDateTime created_at,
            LocalDateTime updated_at,LocalDateTime published_at){
        
        this.course_id = course_id;
        this.title = title;
        this.lesson_content = lesson_content;
        this.slug = slug;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.published_at = published_at;


    }
    public Long getCourseId(){
        return course_id;
    }
    public String getTitle(){
        return title;
    }
    public String getSlug(){
        return slug;
    }
    public String getLessonContent(){
        return lesson_content;
    }
    public LocalDateTime getPublishedAt(){
        return published_at;
    }
    public LocalDateTime getCreatedAt(){
        return created_at;
    }
    public LocalDateTime getUpdatedAt(){
        return updated_at;
    }
}
}