package com.microlearning.api.service;


import org.springframework.stereotype.Service;




import com.microlearning.api.dto.Course_DTO;
import com.microlearning.api.model.Course;
import com.microlearning.api.repository.CourseRepository;
import com.microlearning.api.repository.UserRepository;


@Service
public class CourseService {


    private final UserRepository userRepository;
    private final CourseRepository courseRepository;


    public CourseService(UserRepository userRepository,
                         CourseRepository CourseRepository) {
        this.userRepository = userRepository;
        this.courseRepository = courseRepository;
    }


    public Course_DTO createCourse(CourseRequest req) {


        Course course = new Course();
        course.setCourseId(req.getCourseId());


        Course savedCourse = courseRepository.save(course);


        return new Course_DTO("Course loaded successfully",
                                   savedCourse.getCourseId());
    }
}
