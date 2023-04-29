package com.alansoftware.todo.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.alansoftware.todo.todo.Todo;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static List<Todo> todos = new ArrayList<>();

    private static int todosCount = 0;

    static {
        todos.add(new Todo(++todosCount, "alanwang", "Learn AWS",
                LocalDate.now().plusYears(1), false));
        todos.add(new Todo(++todosCount, "alanwang", "Learn DevOps",
                LocalDate.now().plusYears(2), false));
        todos.add(new Todo(++todosCount, "alanwang", "Learn Full Stack Development",
                LocalDate.now().plusYears(3), false));
    }

    public List<Todo> findByUsername(String username) {
        return todos;
    }

    public void addTodo(String username, String description, LocalDate targetedDate, boolean done) {
        Todo todo = new Todo(++todosCount, username, description, targetedDate, done);
        todos.add(todo);
    }

}