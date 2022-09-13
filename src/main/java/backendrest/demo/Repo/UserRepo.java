package backendrest.demo.Repo;

import backendrest.demo.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByuniqueID(final String uniqueid);
}

