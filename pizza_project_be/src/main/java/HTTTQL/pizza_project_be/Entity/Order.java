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
@Table(name = "Order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "note")
    private String note;

    @Column(name = "payment", nullable = false)
    private String payment;

    @Column(name = "dayOrder", nullable = false)
    private Date dayOrder;

    @Column(name = "state", nullable = false)
    private Boolean state;

    @ManyToOne()
    @JoinColumn(name = "client_id",nullable = false)
    private Client client;

    @ManyToOne()
    @JoinColumn(name = "staff_id", nullable = false)
    private Staff staff;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailComboBill> detailComboBills;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailDrinkBill> detailDrinkBills;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailFoodBill> detailFoodBills;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailPizzaBill> detailPizzaBills;
}
