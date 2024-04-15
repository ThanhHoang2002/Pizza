package HTTTQL.pizza_project_be.DTO.Response;

import HTTTQL.pizza_project_be.Entity.Pizza;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PizzaInComboInResponse {
    private String pizzaInComboId;
    private int quantity;
    private String base;
    private PizzaResponse pizza;
}
