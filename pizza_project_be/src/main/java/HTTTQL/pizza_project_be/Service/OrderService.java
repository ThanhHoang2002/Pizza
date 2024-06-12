package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Order;
import HTTTQL.pizza_project_be.Repository.OrderRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepo orderRepo;
    public Order saveOrder(Order order){
        order.setReceiveMethod(order.getReceiveMethod().toLowerCase());
        order.setState(order.getState().toLowerCase());
        Order output = orderRepo.save(order);
        return output;
    }
    public Order getOrderById(long id){
        return orderRepo.findById(id).orElse(null);
    }
    public List<Order> getConfirmedOrder(String store_id){
        return orderRepo.getConfirmedOrder(store_id);
    }
    public List<Order> getUnconfirmOrder(String store_id){
        return orderRepo.getUnconfirmOrder(store_id);
    }
}
