package com.alansoftware.todo.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.alansoftware.todo.todo.Todo;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();

    static {
        todos.add(new Todo(1, "alanwang", "Learn AWS",
                LocalDate.now().plusYears(1), false));
        todos.add(new Todo(2, "alanwang", "Learn DevOps",
                LocalDate.now().plusYears(2), false));
        todos.add(new Todo(3, "alanwang", "Learn Full Stack Development",
                LocalDate.now().plusYears(3), false));
    }

    public List<Todo> findByUsername(String username) {
        return todos;
    }

}