package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.PizzaType;
import HTTTQL.pizza_project_be.Service.PizzaTypeSerivce;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/pizzaType")
@AllArgsConstructor
public class PizzaTypeController {
    private final PizzaTypeSerivce pizzaTypeService;
    @GetMapping("/all")
    ApiResponse<List<PizzaType>> getAllPizzaType(){
        return ApiResponse.<List<PizzaType>>builder()
                .message("Get all pizza type successfully")
                .result(pizzaTypeService.getAllPizzaType())
                .build();
    }
    @GetMapping("/category")
    ApiResponse<List<PizzaType>> getPizzaTypeByCategory(@RequestParam("category") String category){
        return ApiResponse.<List<PizzaType>>builder()
                .message("Get pizza type by category successfully")
                .result(pizzaTypeService.getAllPizzaTypeByCategory(category))
                .build();
    }
}
