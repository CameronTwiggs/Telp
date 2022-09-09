package backendrest.demo.Controller;


import backendrest.demo.Models.User;
import backendrest.demo.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class ApiControllers {

    @Autowired
    private UserRepo userRepo;

    @GetMapping (value = "/")
    public String getPage() {
        return  "Welcome";
    }

    @GetMapping(value = "/users")
    public List<User> getUsers() {
        return userRepo.findAll();
    }

//    @GetMapping(value = "users/{id}")
//    public User getUser() {
//        return
//    }

    @PostMapping(value= "/save")
    public String saveUser(@RequestBody User user) {
        userRepo.save(user);
        return "...Saved :D";
    }

    @PutMapping(value = "update/{id}")
    public String updateUser(@PathVariable long id, @RequestBody User user) {
        User updatedUser = userRepo.findById(id).get();
        updatedUser.setFirst_name(user.getFirst_name());
        updatedUser.setLast_name(user.getLast_name());
        updatedUser.setBio(user.getBio());
        userRepo.save(updatedUser);
        System.out.println("User" + id + "Updated");
        return  "Updated";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteUser (@PathVariable long id) {
        User deleteUser = userRepo.findById(id).get();
        userRepo.delete(deleteUser);
        System.out.println("Deleted user with id of" + id);
        return  "Deleted user with id of" + id;

    }
}
