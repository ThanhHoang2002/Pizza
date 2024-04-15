package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizza_in_combo")
public class PizzaInCombo {
    @Id
    @Column(name = "pizza_in_combo_id")
    private String pizzaInComboId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "base", nullable = false)
    private String base;

    @ManyToOne
    @JoinColumn(name = "pizza_id", nullable = false)
    private Pizza pizza;

}
