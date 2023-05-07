package com.alansoftware.rest.webservices.restfulwebservices.user;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class UserDaoService {
    // JPA/Hibernate > Database
    // UserDaoService > Static List

    private static List<User> users = new ArrayList<>();
    private static int userCount = 0;

    static {
        users.add(new User(++userCount, "Alan", LocalDate.now().minusYears(32)));
        users.add(new User(++userCount, "Sean", LocalDate.now().minusYears(26)));
        users.add(new User(++userCount, "Ray", LocalDate.now().minusYears(32)));
    }

     public List<User> findAll() {
        return users;
     }

    public User save(User user) {
        user.setId(++userCount);
        users.add(user);
        return user;
    }

    public User findOne(int id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
//        return users.stream().filter(predicate).findFirst().get();
        return users.stream().filter(predicate).findFirst().orElse(null);
    }
}
