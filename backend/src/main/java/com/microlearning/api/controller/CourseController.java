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


import com.microlearning.api.service.CourseService;
import com.microlearning.api.dto.Course_DTO.courseRequest;
import com.microlearning.api.dto.Course_DTO.courseResponse;
import com.microlearning.api.model.Course;




@RestController
@RequestMapping("/course")
public class CourseController {
   
   @Autowired
    private CourseService courseService;
     
    @GetMapping("/course")
    public CourseResponse getCourse(){
        return courseService.getCourse();


        /* POST REQUEST */
    @PostMapping("/course")
    public CourseResponse createCourse(@RequestBody CourseRequest req){
        return courseService.createCourse(req);
    }


    /* PATCH REQUEST */
    @PatchMapping("/course")
    public CourseRepsonse updateCourse(@RequestBody CourseRequest req){
        return courseService.updateCourse(req);
    }




    /* DEL REQUEST */
    @DeleteMapping("/course")
    public void deleteCourse(){
        courseService.deleteCourse();
   
    }
}
