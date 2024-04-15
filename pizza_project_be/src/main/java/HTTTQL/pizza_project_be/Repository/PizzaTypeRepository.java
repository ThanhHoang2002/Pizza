package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.PizzaType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PizzaTypeRepository extends JpaRepository<PizzaType, String> {
    public List<PizzaType> findAllByCategory(String category);
}
