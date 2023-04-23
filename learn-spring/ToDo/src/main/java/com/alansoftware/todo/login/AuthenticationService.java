package com.alansoftware.todo.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    public boolean authenticate(String username, String password) {

        boolean isValidUserName = username.equalsIgnoreCase("alanwang");
        boolean isValidPassword = password.equalsIgnoreCase("pwcwelcome");

        return isValidUserName && isValidPassword;
    }
}
