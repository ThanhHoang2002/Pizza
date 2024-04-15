package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "combo")

public class Combo {
    @Id
    @Column(name = "combo_id")
    private String comboId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "day_start", nullable = false)
    private Date dayStart;

    @Column(name = "day_end", nullable = false)
    private Date dayEnd;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "des", nullable = false)
    private String des;

    @OneToMany
    @JoinColumn(name = "combo_id")
    private List<FoodInCombo> foodInCombos;

    @OneToMany
    @JoinColumn(name = "combo_id")
    private List<PizzaInCombo> pizzaInCombos;
}
