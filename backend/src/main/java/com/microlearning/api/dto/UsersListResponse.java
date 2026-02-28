package com.microlearning.api.dto;

import java.util.List;

/* Response body for GET /users?skip=0&take=10 (Admin) */
public class UsersListResponse {
    public long total;
    public int skip;
    public int take;
    public List<UserResponse> users;

    public UsersListResponse(long total, int skip, int take, List<UserResponse> users) {
        this.total = total;
        this.skip = skip;
        this.take = take;
        this.users = users;
    }
}