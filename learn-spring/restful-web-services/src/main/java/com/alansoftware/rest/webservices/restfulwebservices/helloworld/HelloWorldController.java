package com.alansoftware.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

// REST API
@RestController
public class HelloWorldController {

    // hello world

    // "Hello World"
    @RequestMapping(method = RequestMethod.GET, path="/hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    @GetMapping(path = "/hello-world2")
    public String helloWorld2() {
        return "Hello World with GetMapping";
    }

    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    // Path Parameters
    // /users/{id}/todos/{id}  => /users/2/todos/200
    // /hello-world/path-variable/{name}

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }

}
