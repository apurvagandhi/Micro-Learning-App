# How To Create a **Controller** 🤖
**Definition**: The controller is the API endpoint of your application - or, in non technical-terms, the first point of contact your backend has with your front end. Here, we will mainly deal...
(1) Converting JSON data to java objects(incoming requests)
(2) Converting java objects back into JSON data (outgoing responses).

<!-- File Start -->
package com.microlearning.api.controller;

## Spring Boot Framework
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

## Request Variables
import com.microlearning.api.service.NAME_OF_SERVICE_FILE;
import com.microlearning.api.dto.NAME_OF_BACKEND_DTO;
import com.microlearning.api.dto.NAME_OF_FRONTEND_DTO;
import com.microlearning.api.model.NAME_OF_TABLE;

@RestController <!-- Identify that this file will be a controller -->
@RequestMapping("/api/users") <!-- Identify by what directory this API will be accessed -->

<!-- Note: You can either use @PathVariable in the parements or JWT Token in Security to get the Current User -->

public class UserController {

    @Autowired
    private NAME_OF_SERVICE_FILE NAME_OF_OBJECT;
    
    /* GET REQUEST */
    @GetMapping("/NAME_OF_WHAT_REQUEST_IS_FOR")
    public NAME_OF_BACKEND_DTO NAME_OF_GET_REQUEST(){
        return NAME_OF_OBJECT.NAME_OF_GET_REQUEST();
    }

    /* POST REQUEST */
    @PostMapping("/NAME_OF_WHAT_REQUEST_IS_FOR")
    public NAME_OF_BACKEND_DTO NAME_OF_POST_REQUEST(@RequestBody NAME_OF_FRONTEND_DTO req){
        return NAME_OF_OBJECT.NAME_OF_POST_REQUEST(req);
    }

    /* PATCH REQUEST */
    @PatchMapping("/NAME_OF_WHAT_REQUEST_IS_FOR")
    public NAME_OF_BACKEND_DTO NAME_OF_PATCH_REQUEST(@RequestBody NAME_OF_FRONTEND_DTO req){
        return NAME_OF_OBJECT.NAME_OF_PATCH_REQUEST(req);
    }

    /* DEL REQUEST */
    @DeleteMapping("/NAME_OF_WHAT_REQUEST_IS_FOR")
    public void NAME_OF_DEL_REQUEST(){
        NAME_OF_OBJECT.NAME_OF_DEL_REQUEST();
    }
}
