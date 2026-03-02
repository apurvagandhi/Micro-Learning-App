package com.microlearning.api.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microlearning.api.dto.Course_DTO.CourseRequest;
import com.microlearning.api.dto.Course_DTO.CourseResponse;
import com.microlearning.api.service.CourseService;





@RestController
@RequestMapping("/course")
public class CourseController {
   
   @Autowired
    private CourseService courseService;
     
    @GetMapping("/{courseId}")
    public CourseResponse getCourse(@PathVariable long courseId){
        return courseService.getCourse(courseId);
    }


        /* POST REQUEST */
    @PostMapping
    public CourseResponse createCourse(@RequestBody CourseRequest req){
        return courseService.createCourse(req);
    }


    /* PATCH REQUEST */
    @PatchMapping("/course/{courseId}")
    public CourseResponse updateCourse(@PathVariable Long courseId,@RequestBody CourseRequest req){
        return courseService.updateCourse(courseId, req);
    }




    /* DEL REQUEST */
    @DeleteMapping("/course/{courseId}")
    public void deleteCourse(@PathVariable Long courseId){
        courseService.deleteCourse(courseId);
   
    }
}
