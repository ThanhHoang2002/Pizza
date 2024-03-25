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
@Table(name = "drink_in_combo")
public class DrinkInCombo {
    @Id
    @Column(name = "drink_in_combo_id")
    private String drinkInComboId;

    @Column(name = "quantity", nullable = false)
    private int quantity;


    @ManyToOne
    @JoinColumn(name = "drink_id", nullable = false)
    private Drink drink;
}
