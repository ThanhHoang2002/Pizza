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
@Table(name = "tbl_detailcombobill")
public class DetailComboBill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "priceatbill", nullable = false)
    private int priceAtBill;

    @OneToMany(mappedBy = "detailcombobill", cascade = CascadeType.ALL)
    private List<Combo> combos;
}
