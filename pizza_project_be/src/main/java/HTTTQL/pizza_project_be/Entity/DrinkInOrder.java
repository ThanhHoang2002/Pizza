package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "drink_in_order")
public class DrinkInOrder {
    @Id
    @Column(name = "drink_in_order_id")
    private String drinkInOrderId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "priceAtBill", nullable = false)
    private int priceAtBill;

    @ManyToOne
    @JoinColumn(name = "drink_id", nullable = false)
    private Drink drink;
}
