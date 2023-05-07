package com.alansoftware.rest.webservices.restfulwebservices.user;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class UserResource {
    private UserDaoService service;

    // constructor wiring
    public UserResource(UserDaoService service) {
        this.service = service;
    }

    // Get /users
    @GetMapping(path = "/users")
    public List<User> retrieveAllUsers() {
        return service.findAll();
    }

    // Get /user
    @GetMapping(path = "/users/{id}")
    public User retrieveUser(@PathVariable int id) {
        User user = service.findOne(id);
        if (user == null)
            throw new UserNotFoundException("id: " + id);
        return user;
    }

    // POST /users
    @PostMapping(path = "/users")
    public ResponseEntity<Object> createUser(@Valid @RequestBody User user) {
        User savedUser = service.save(user);
        // return location:
        // /users/4 => /users , user.getID
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getId())
                .toUri();

        return ResponseEntity.created(location).build();
    }

    // DELETE /users
    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable int id) {
        service.deleteById(id);
    }
}
