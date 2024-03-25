package HTTTQL.pizza_project_be.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizza_in_order")
public class PizzaInOrder {

    @Id
    @Column(name = "pizza_in_order_id")
    private String pizzaInOrderId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "priceatbill", nullable = false)
    private int priceAtBill;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pizza_id", nullable = false)
    private Pizza pizza;
}
