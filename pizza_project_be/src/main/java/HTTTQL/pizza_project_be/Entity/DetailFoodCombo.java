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
@Table(name = "tbl_detailfoodcombo")
public class DetailFoodCombo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @OneToMany(mappedBy = "detailfoodcombo", cascade = CascadeType.ALL)
    private List<Food> foods;
}
