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
@Table(name = "Combo")
public class Combo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "dayS", nullable = false)
    private Date dayS;

    @Column(name = "dayE", nullable = false)
    private Date dayE;

    @OneToMany(mappedBy = "combo", cascade = CascadeType.ALL)
    private List<DetailDrinkCombo> detailDrinkCombos;

    @OneToMany(mappedBy = "combo", cascade = CascadeType.ALL)
    private List<DetailFoodCombo> detailFoodCombos;

    @OneToMany(mappedBy = "combo", cascade = CascadeType.ALL)
    private List<DetailPizzaCombo> detailPizzaCombos;
}
