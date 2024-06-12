package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long>{
    @Query(value = "SELECT * FROM orders WHERE state != 'Chờ xác nhận' AND store_id = :store_id ORDER BY order_id DESC LIMIT 100", nativeQuery = true)
    List<Order> getConfirmedOrder(@Param("store_id") String store_id);

    @Query(value = "SELECT * FROM orders WHERE state = 'Chờ xác nhận' AND store_id = :store_id ORDER BY order_id DESC", nativeQuery = true)
    List<Order> getUnconfirmOrder(@Param("store_id") String store_id);

    @Query("SELECT o FROM Order o WHERE YEAR(o.dayOrder) = :year AND QUARTER(o.dayOrder) = :quarter")
    List<Order> findOrdersInQuarterOfyear(int year, int quarter);
    @Query("SELECT o FROM Order o WHERE YEAR(o.dayOrder) = :year")
    List<Order> findOrderInYear(int year);
}
