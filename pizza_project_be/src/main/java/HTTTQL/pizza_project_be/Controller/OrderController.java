package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.Order;
import HTTTQL.pizza_project_be.Service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/order")
public class OrderController {
    private final OrderService orderService;
    @PostMapping("/add")
    public ApiResponse<Order> addOrder(@RequestBody Order order){
        Order result = orderService.saveOrder(order);
        return ApiResponse.<Order>builder()
                .message("Add order successfully")
                .result(result)
                .build();
    }
    @GetMapping("/get/{order_id}")
    public ApiResponse<Order> getOrderById(@PathVariable("order_id") int order_id){
        Order result = orderService.getOrderById(order_id);
        return ApiResponse.<Order>builder()
                .message("Get order by id successfully")
                .result(result)
                .build();
    }
    @PreAuthorize("hasAnyAuthority('VIEW_ALL_ORDERS')")
    @GetMapping("/getConfirmedOrder/{store_id}")
    public ApiResponse<List<Order>> getConfirmedOrder(@PathVariable("store_id") String store_id){
        List<Order> result = orderService.getConfirmedOrder(store_id);
        return ApiResponse.<List<Order>>builder()
                .message("Get confirmed order successfully")
                .result(result)
                .build();
    }
    @PreAuthorize("hasAnyAuthority('VIEW_ALL_ORDERS')")
    @GetMapping("/getUnconfirmOrder/{store_id}")
    public ApiResponse<List<Order>> getUnconfirmOrder(@PathVariable("store_id") String store_id){
        List<Order> result = orderService.getUnconfirmOrder(store_id);
        return ApiResponse.<List<Order>>builder()
                .message("Get confirmed order successfully")
                .result(result)
                .build();
    }
    @PreAuthorize("hasAnyAuthority('VIEW_ALL_ORDERS')")
    @PutMapping("/update")
    public ApiResponse<Order> updateOrder(@RequestBody Order order){
        Order result = orderService.saveOrder(order);
        return ApiResponse.<Order>builder()
                .message("Update order successfully")
                .result(result)
                .build();
    }

}
