package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepo extends JpaRepository<Client, String> {
}
