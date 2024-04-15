package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.PizzaType;
import HTTTQL.pizza_project_be.Service.PizzaTypeSerivce;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pizzaType")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class PizzaTypeController {
    private final PizzaTypeSerivce pizzaTypeService;
    @GetMapping
    ApiResponse<List<PizzaType>> getAllPizzaType(){
        return ApiResponse.<List<PizzaType>>builder()
                .message("Get all pizza type successfully")
                .result(pizzaTypeService.getAllPizzaType())
                .build();
    }
}
