package HTTTQL.pizza_project_be.DTO.Response;

import HTTTQL.pizza_project_be.Entity.PizzaType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
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
public class PizzaResponse {
    private String pizzaId;
    private String size;
    private int price;
    private PizzaType pizzaType;
}
