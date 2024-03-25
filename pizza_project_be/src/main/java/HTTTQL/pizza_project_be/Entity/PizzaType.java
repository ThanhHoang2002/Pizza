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
@Table(name = "pizza_type")

public class PizzaType {
    @Id
    @Column(name = "pizza_type_id")
    private String pizzaTypeId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "ingredient", nullable = false)
    private String ingredient;

    @Column(name = "category", nullable = false)
    private String category;

    @OneToMany
    @JoinColumn(name = "pizza_id")
    private List<Pizza> pizzas;
}
