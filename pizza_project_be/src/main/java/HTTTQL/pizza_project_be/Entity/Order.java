package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "order_id")
    private String order_id;

    @Column(name = "note")
    private String note;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "day_order", nullable = false)
    private Date dayOrder;

    @Transient
    private int total;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "receive_method", nullable = false)
    private String receiveMethod;

    @Column(name = "state", nullable = false)
    private String state;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<ComboInOrder> comboInOrders;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<PizzaInOrder> pizzaInOrders;

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<FoodInOrder> foodInOrders;


    public Order(String order_id, String note, String paymentMethod, Date dayOrder, String address, String receiveMethod, String state, Client client, Staff staff, List<ComboInOrder> comboInOrders, List<PizzaInOrder> pizzaInOrders, List<FoodInOrder> foodInOrders, Store store) {
        this.order_id = order_id;
        this.note = note;
        this.paymentMethod = paymentMethod;
        this.dayOrder = dayOrder;
        this.address = address;
        this.receiveMethod = receiveMethod;
        this.state = state;
        this.client = client;
        this.staff = staff;
        this.comboInOrders = comboInOrders;
        this.pizzaInOrders = pizzaInOrders;
        this.foodInOrders = foodInOrders;
        this.store = store;
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
        this.total= total;
    }
}
