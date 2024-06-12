package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepo extends JpaRepository<Food, String> {
    public List<Food> findAllByFoodCategory(String foodCategory);
}
