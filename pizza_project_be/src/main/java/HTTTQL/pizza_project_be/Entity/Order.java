package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "order_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;

    @Column(name = "note")
    private String note;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "day_order", nullable = false)
    private Date dayOrder;

    @Column(name = "address")
    private String address;

    @Column(name = "receive_method", nullable = false)
    private String receiveMethod;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone", nullable = false)
    private String phone;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<ComboInOrder> comboInOrders;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<PizzaInOrder> pizzaInOrders;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<FoodInOrder> foodInOrders;

    public long getTotal(){
        int total = 0;
        for (ComboInOrder comboInOrder : comboInOrders) {
            total += comboInOrder.getPriceAtBill();
        }
        for(PizzaInOrder pizzaInOrder : pizzaInOrders){
            total += pizzaInOrder.getPriceAtBill();
        }
        for(FoodInOrder foodInOrder : foodInOrders){
            total += foodInOrder.getPriceAtBill();
        }
        return total;
    }
}
