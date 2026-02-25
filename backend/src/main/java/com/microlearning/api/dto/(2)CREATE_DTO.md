# How To Create a **DTO's** 🔒
**Definition**: DTO'S help with how data moves across the varying layers of your application. 
Particularly, it can help with omitting information you don't want in a incoming request or outgoing response. 

<!-- File Start -->
package com.microlearning.api.dto;

<!-- Front-end DTO -->
public class NAME_OF_FUNCTION_REQUEST{
    public DATA_TYPE NAME_OF_VAR;
    public DATA_TYPE NAME_OF_VAR;
}

<!-- Backend DTO -->
public class NAME_OF_API_RESPONSE {
    public DATA_TYPE NAME_OF_VAR;
    public DATA_TYPE NAME_OF_VAR;
}
