package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.Food;
import HTTTQL.pizza_project_be.Service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/food")
public class FoodController {
    private final FoodService foodService;
    @GetMapping("/category")
    public ApiResponse<List<Food>> findAllByFoodCategory(@RequestParam("category") String foodCategory){
        return ApiResponse.<List<Food>>builder()
                .message("Get all food successfully")
                .result(foodService.findAllByFoodCategory(foodCategory))
                .build();
    }
    @GetMapping("/all")
    public ApiResponse<List<Food>> getAllFood(){
        return ApiResponse.<List<Food>>builder()
                .message("Get all food successfully")
                .result(foodService.getAllFood())
                .build();
    }
    @PreAuthorize("hasAuthority('CREAT_DATA')")
    @GetMapping("/search/{id}")
    public ApiResponse<Food> getFoodById(@PathVariable("id") String foodId){
        return ApiResponse.<Food>builder()
                .message("Get food by id successfully")
                .result(foodService.getFoodById(foodId))
                .build();
    }
    @PreAuthorize("hasAuthority('CREAT_DATA')")
    @PostMapping("/add")
    public ApiResponse<Food> addFood(@RequestBody Food food){
        return ApiResponse.<Food>builder()
                .message("Add food successfully")
                .result(foodService.addFood(food))
                .build();
    }
}
