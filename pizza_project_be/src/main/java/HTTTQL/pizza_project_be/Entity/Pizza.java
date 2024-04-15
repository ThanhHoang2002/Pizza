package HTTTQL.pizza_project_be.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizza")

public class Pizza {
    @Id
    @Column(name = "pizza_id")
    private String pizzaId;

    @Column(name = "size", nullable = false)
    private String size;

    @Column(name = "price", nullable = false)
    private int price;

    @ManyToOne()
    @JoinColumn(name = "pizza_type_id")
    @JsonBackReference
    private PizzaType pizzaType;
}
