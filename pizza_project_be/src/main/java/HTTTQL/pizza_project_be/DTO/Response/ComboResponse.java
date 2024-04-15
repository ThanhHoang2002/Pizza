package HTTTQL.pizza_project_be.DTO.Response;

import HTTTQL.pizza_project_be.Entity.FoodInCombo;
import HTTTQL.pizza_project_be.Entity.PizzaInCombo;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ComboResponse {
    private String comboId;
    private String name;
    private int price;
    private Date dayStart;
    private Date dayEnd;
    private String image;
    private String category;
    private String des;
    private List<FoodInCombo> foodInCombos;
    private List<PizzaInComboInResponse> pizzaInCombos;
}
