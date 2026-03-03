package com.microlearning.api.service;


import org.springframework.stereotype.Service;

import com.microlearning.api.dto.Course_DTO;
import com.microlearning.api.dto.Course_DTO.CourseRequest;
import com.microlearning.api.dto.Course_DTO.CourseResponse;
import com.microlearning.api.model.Course;
import com.microlearning.api.repository.CourseRepository;



@Service
public class CourseService {


    private final CourseRepository courseRepository;


    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }


    public Course_DTO.CourseResponse createCourse(Course_DTO.CourseRequest req) {


        Course course = new Course();
       
        course.setTitle(req.getTitle());
        course.setLessonContent(req.getLessonContent());
        course.setSlug(req.getSlug());
        course.setCreatedAt(req.getCreatedAt());
        course.setUpdatedAt(req.getUpdatedAt());
        course.setPublishedAt(req.getPublishedAt());


        Course savedCourse = courseRepository.save(course);


        return new CourseResponse(savedCourse.getCourseId(), savedCourse.getTitle(), savedCourse.getLessonContent(), savedCourse.getSlug(), savedCourse.getCreatedAt(), savedCourse.getUpdatedAt(),savedCourse.getPublishedAt());
    }

    //getCourse function
    public Course_DTO.CourseResponse getCourse(Long courseId) {

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course Not Found"));
       

    return new Course_DTO.CourseResponse( course.getCourseId(), 
    course.getTitle(), course.getLessonContent(), course.getSlug(), course.getCreatedAt(), 
    course.getUpdatedAt(), course.getPublishedAt());
    }








    //updateCourse function
    public Course_DTO.CourseResponse updateCourse(Long courseId, CourseRequest req) {

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course Not Found"));
       

       //Update course

        course.setTitle(req.getTitle());
        course.setLessonContent(req.getLessonContent());

    return new Course_DTO.CourseResponse(course.getCourseId(),course.getTitle(), course.getLessonContent(), course.getSlug(), course.getCreatedAt(), 
    course.getUpdatedAt(), course.getPublishedAt());
    }










    //deleteCourse function
    public void deleteCourse(Long courseId) {

        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course Not Found"));
       
        courseRepository.delete(course);

    }
}
