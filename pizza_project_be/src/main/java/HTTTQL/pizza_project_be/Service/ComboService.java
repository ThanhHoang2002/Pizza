package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.DTO.Response.ComboResponse;
import HTTTQL.pizza_project_be.DTO.Response.PizzaInComboInResponse;
import HTTTQL.pizza_project_be.DTO.Response.PizzaResponse;
import HTTTQL.pizza_project_be.Entity.Combo;
import HTTTQL.pizza_project_be.Entity.PizzaInCombo;
import HTTTQL.pizza_project_be.Repository.ComboRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class ComboService {
    private final ComboRepository comboRepository;
    public List<ComboResponse> getComboByCategory(String category){
        List<Combo> combos = comboRepository.findComboByCategory(category);
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
                pizzaInComboInResponse.setBase(pizzaInCombo.getBase());
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
        return comboResponses;
    }
}
