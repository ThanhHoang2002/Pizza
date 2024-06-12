package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.DTO.Response.ComboResponse;
import HTTTQL.pizza_project_be.DTO.Response.PizzaInComboInResponse;
import HTTTQL.pizza_project_be.DTO.Response.PizzaResponse;
import HTTTQL.pizza_project_be.Entity.Combo;
import HTTTQL.pizza_project_be.Entity.PizzaInCombo;
import HTTTQL.pizza_project_be.Service.ComboService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/combo")
@AllArgsConstructor
public class ComboController {
    private final ComboService comboService;
    @GetMapping("/category")
    ApiResponse<List<ComboResponse>> getComboByCategory(@RequestParam("category") String category){
        List<ComboResponse> combos = comboService.getComboByCategory(category);

        return ApiResponse.<List<ComboResponse>>builder()
                .message("Get combo by category successfully")
                .result(combos)
                .build();
    }

}
