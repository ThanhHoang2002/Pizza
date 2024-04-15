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
@RequestMapping("/combo")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class ComboController {
    private final ComboService comboService;
    @GetMapping
    ApiResponse<List<ComboResponse>> getComboByCategory(@RequestParam("category") String category){
        List<Combo> combos = comboService.getComboByCategory(category);
        List<ComboResponse> comboResponses= new ArrayList<>();
        combos.forEach(combo -> {
            ComboResponse comboResponse = new ComboResponse();
            comboResponse.setComboId(combo.getComboId());
            comboResponse.setName(combo.getName());
            comboResponse.setPrice(combo.getPrice());
            comboResponse.setDayStart(combo.getDayStart());
            comboResponse.setDayEnd(combo.getDayEnd());
            comboResponse.setImage(combo.getImage());
            comboResponse.setCategory(combo.getCategory());
            comboResponse.setDes(combo.getDes());
            comboResponse.setFoodInCombos(combo.getFoodInCombos());
            List<PizzaInCombo> pizzaInCombos = combo.getPizzaInCombos();
            List<PizzaInComboInResponse> pizzaInComboInResponses = new ArrayList<>();
            pizzaInCombos.forEach(pizzaInCombo -> {
                PizzaInComboInResponse pizzaInComboInResponse = new PizzaInComboInResponse();
                pizzaInComboInResponse.setPizzaInComboId(pizzaInCombo.getPizzaInComboId());
                pizzaInComboInResponse.setQuantity(pizzaInCombo.getQuantity());
                PizzaResponse pizzaResponse = new PizzaResponse();
                pizzaResponse.setPizzaId(pizzaInCombo.getPizza().getPizzaId());
                pizzaResponse.setSize(pizzaInCombo.getPizza().getSize());
                pizzaResponse.setPrice(pizzaInCombo.getPizza().getPrice());
                pizzaResponse.setPizzaType(pizzaInCombo.getPizza().getPizzaType());
                pizzaInComboInResponse.setPizza(pizzaResponse);
                pizzaInComboInResponses.add(pizzaInComboInResponse);
            });
            comboResponse.setPizzaInCombos(pizzaInComboInResponses);
            comboResponses.add(comboResponse);
        });
        return ApiResponse.<List<ComboResponse>>builder()
                .message("Get combo by category successfully")
                .result(comboResponses)
                .build();
    }

}
