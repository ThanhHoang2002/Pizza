package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Combo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComboRepository extends JpaRepository<Combo, String> {
    public List<Combo> findComboByCategory(String category);
}
