package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_pizza")
public class Pizza {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "size", nullable = false)
    private String size;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "base", nullable = false)
    private String base;

    @ManyToOne()
    @JoinColumn(name = "pizzatype_id", nullable = false)
    private PizzaType pizzaType;
}
