package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "drink")
public class Drink {
    @Id
    @Column(name = "drink_id")
    private String drinkId;

    @Column(name = "name" , nullable = false)
    private String name;

    @Column(name = "price" , nullable = false)
    private int price;
}
