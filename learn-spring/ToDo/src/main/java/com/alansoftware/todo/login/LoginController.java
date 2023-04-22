package com.alansoftware.todo.login;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    // login-page => com.alansoftware.todo.login.loginController => request mapping (login-page)
    // => login.jsp
    @RequestMapping("login-page")
    public String login(@RequestParam String name, ModelMap model) {
        model.put("name", name);
        System.out.println("Reqest param is " + name); // Not recommended for PROD CODE
        return "login";
    }
}
