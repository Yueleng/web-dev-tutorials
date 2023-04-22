package com.alansoftware.springboot.learnjpaandhibernate.course.jdbc;

import com.alansoftware.springboot.learnjpaandhibernate.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {
    @Autowired
    private JdbcTemplate springJdbcRepository;
    private final static String INSERT_QUERY =
            """
                    insert into course (id, name, author)
                    values (?, ?, ?);
                    """;
    private final static String DELETE_QUERY =
            """
                    delete from course
                    where id = ?;
                     """;

    private final static String SELECT_QUERY =
            """
                    select * from course where id = ?
                    """;

    public void insert(Course course) {
        springJdbcRepository.update(INSERT_QUERY,
                course.getId(),
                course.getName(),
                course.getAuthor()
        );
    }

    public void deleteById(long id) {
        springJdbcRepository.update(DELETE_QUERY, id);
    }

    public Course findById(long id) {
        // ResultSet -> Bean [Row Mapper]
        return springJdbcRepository.queryForObject(SELECT_QUERY, new BeanPropertyRowMapper<>(Course.class), id);
    }
}
