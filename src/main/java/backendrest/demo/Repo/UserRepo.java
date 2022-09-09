package backendrest.demo.Repo;

import backendrest.demo.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepo extends JpaRepository<User, Long> {

}