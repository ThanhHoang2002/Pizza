package HTTTQL.pizza_project_be.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "staff")
public class Staff {
    @Id
    @Column(name = "staff_id")
    private String staffId;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "birthday", nullable = false)
    private Date birthday;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "email", nullable = false)
    private String email;

    @ManyToOne
    @JoinColumn(name = "store_id", nullable = false)
    private Store store;
}
