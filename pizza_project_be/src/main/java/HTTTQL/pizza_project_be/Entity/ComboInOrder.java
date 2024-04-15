package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "combo_in_order")
public class ComboInOrder {
    @Id
    @Column(name = "combo_in_order_id")
    private String comboInOrderId;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "price_at_bill", nullable = false)
    private int priceAtBill;

    @ManyToOne
    @JoinColumn(name = "combo_id", nullable = false)
    private Combo combo;
}
