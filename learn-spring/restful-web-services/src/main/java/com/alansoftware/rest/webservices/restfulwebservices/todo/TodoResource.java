package com.alansoftware.rest.webservices.restfulwebservices.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoResource {
    private TodoService todoService;

    public TodoResource(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username) {
        return todoService.findByUsername(username);
    }

    @GetMapping("/users/{username}/todos/{todoId}")
    public Todo retrieveTodo(@PathVariable String username, @PathVariable int todoId) {
        return todoService.findById(todoId);
    }

    @DeleteMapping("/users/{username}/todos/{todoId}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username,
                                           @PathVariable int todoId) {
        todoService.deleteById(todoId);
        return ResponseEntity.noContent().build();
    }
}
