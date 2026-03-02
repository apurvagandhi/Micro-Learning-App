package com.microlearning.api.model;


import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Entity
@Table(name = "courses")


public class Course {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "course_id")
private Long courseId;
 


@Column(name = "created_at")
private LocalDateTime createdAt;


@Column(name = "updated_at")
private LocalDateTime updatedAt;


@Column(name = "published_at")
private LocalDateTime publishedAt;


@Column(name = "title")
private String title;


@Column(name = "lesson_content")
private String lessonContent;


@Column(name = "slug")
private String slug;





public Course(){
       
}
//Course Object
public Course(String title, String lessonContent, String slug,LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime publishedAt){


this.title = title;
this.lessonContent = lessonContent;
this.slug = slug;
this.createdAt = createdAt;
this.updatedAt = updatedAt;
this.publishedAt = publishedAt;   
}


//Getters and Setters
public Long getCourseId() {
       return courseId;
}


public void setCourseId(Long courseId) {
       this.courseId = courseId;
}


public String getTitle() {
       return title;
}


public void setTitle(String title) {
       this.title = title;
}


public String getLessonContent() {
       return lessonContent;
}


public void setLessonContent(String lessonContent) {
       this.lessonContent = lessonContent;
}


public String getSlug() {
       return slug;
}


public void setSlug(String slug) {
       this.slug = slug;
}


public LocalDateTime getCreatedAt() {
       return createdAt;
}


public void setCreatedAt(LocalDateTime createdAt) {
       this.createdAt = createdAt;
}


public LocalDateTime getUpdatedAt() {
       return updatedAt;
}


public void setUpdatedAt(LocalDateTime updatedAt) {
       this.updatedAt = updatedAt;
}


public LocalDateTime getPublishedAt() {
       return publishedAt;
}


public void setPublishedAt(LocalDateTime publishedAt) {
       this.publishedAt = publishedAt;
}
  
}
