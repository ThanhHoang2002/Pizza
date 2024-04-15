package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "food")

public class Food {
    @Id
    @Column(name = "food_id")
    private String foodId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "des")
    private String des;

    @Column(name = "food_category", nullable = false)
    private String foodCategory;

}
