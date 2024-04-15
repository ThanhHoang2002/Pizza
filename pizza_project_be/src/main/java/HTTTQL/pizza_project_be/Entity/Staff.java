package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@PrimaryKeyJoinColumn(name = "user_id")
public class Staff extends User{

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;

}
