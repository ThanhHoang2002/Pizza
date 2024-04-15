package HTTTQL.pizza_project_be.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column(name = "des", nullable = false)
    private String des;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "image", nullable = false)
    private String image;

    @OneToMany(mappedBy = "pizzaType",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Pizza> pizzas;
}
