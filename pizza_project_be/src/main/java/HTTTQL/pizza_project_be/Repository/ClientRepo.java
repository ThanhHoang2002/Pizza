package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepo extends JpaRepository<Client, String> {
     Client findByEmail(String email);

     @Modifying
     @Query("UPDATE Client c SET c.point = :point WHERE c.clientId = :id")
     void updatePoint(@Param("point") long point, @Param("id") Long id);

}
