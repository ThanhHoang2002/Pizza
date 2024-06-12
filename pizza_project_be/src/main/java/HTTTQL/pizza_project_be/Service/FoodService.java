package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Food;
import HTTTQL.pizza_project_be.Repository.FoodRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FoodService {
    private final FoodRepo foodRepo;
    public List<Food> findAllByFoodCategory(String foodCategory){
        return foodRepo.findAllByFoodCategory(foodCategory);

    }
    public List<Food> getAllFood(){
        return foodRepo.findAll();
    }
    public Food getFoodById(String foodId){
        return foodRepo.findById(foodId).orElse(null);
    }
    public Food addFood(Food food){
        return foodRepo.save(food);
    }
}
