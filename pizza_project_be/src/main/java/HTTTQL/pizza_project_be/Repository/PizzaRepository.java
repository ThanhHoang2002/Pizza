package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends JpaRepository<Pizza,String> {
}
