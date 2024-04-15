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
@Table(name = "food_in_order")
public class FoodInOrder {
    @Id
    @Column(name = "food_in_order_id")
    private String foodInOrderId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price_at_bill", nullable = false)
    private int priceAtBill;

    @ManyToOne
    @JoinColumn(name = "food_id", nullable = false)
    private Food food;

}
