package com.alansoftware.springboot.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {

    @Autowired
    private JdbcTemplate springJdbcRepository;

    private final static String INSERT_QUERY =
            """
            insert into course (id, name, author)
            values (1, 'Learn AWS', 'inAlansMacStudio');
            """;

    public void insert() {
        springJdbcRepository.update(INSERT_QUERY);
    }
}
