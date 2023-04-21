package com.alansoftware.springboot.learnjpaandhibernate.course.jdbc;

import com.alansoftware.springboot.learnjpaandhibernate.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner {

    @Autowired
    private CourseJdbcRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.insert(new Course(1, "Learn AWS", "French Guy"));
        repository.insert(new Course(2, "Learn Springboot", "Indian Guy"));
        repository.insert(new Course(3, "Learn DevOps", "Indian Guy"));

        repository.deleteById(1);

        System.out.println(repository.selectById(2));
        System.out.println(repository.selectById(3));

    }
}
