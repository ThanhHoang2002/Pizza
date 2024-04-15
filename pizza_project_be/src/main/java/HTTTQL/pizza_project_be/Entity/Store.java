package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "store")
public class Store {

    @Id
    @Column(name = "store_id")
    private String storeId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "local", nullable = false)
    private String local;

}
