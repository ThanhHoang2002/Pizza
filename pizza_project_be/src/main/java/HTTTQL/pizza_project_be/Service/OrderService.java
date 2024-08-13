package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Order;
import HTTTQL.pizza_project_be.Enums.ErrorCode;
import HTTTQL.pizza_project_be.Exception.AppException;
import HTTTQL.pizza_project_be.Repository.ClientRepo;
import HTTTQL.pizza_project_be.Repository.OrderRepo;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepo orderRepo;
    private final ClientRepo clientRepo;
    @Transactional
    public Order saveOrder(Order order){
        order.setReceiveMethod(order.getReceiveMethod().toLowerCase());
        order.setState(order.getState().toLowerCase());
        Order output = orderRepo.save(order);
        if(order.getState().equals("hoàn thành") && order.getClient()!=null){
            clientRepo.updatePoint(order.getClient().getPoint()+order.getTotal()/1000,order.getClient().getClientId() );
        }
        return output;
    }
    public Order getOrderById(long id){
        return orderRepo.findById(id).orElseThrow(()-> new AppException(ErrorCode.ENTITY_NOT_FOUND));
    }
    public List<Order> getConfirmedOrder(String store_id){
        return orderRepo.getConfirmedOrder(store_id);
    }
    public List<Order> getUnconfirmOrder(String store_id){
        return orderRepo.getUnconfirmOrder(store_id);
    }
}
