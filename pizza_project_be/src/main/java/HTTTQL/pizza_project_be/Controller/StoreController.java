package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.Store;
import HTTTQL.pizza_project_be.Service.StoreService;
import lombok.AllArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/store")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class StoreController {
    private final StoreService storeService;
    @GetMapping
    ApiResponse<List<Store>> getAllStore(){

        return ApiResponse.<List<Store>>builder()
                .message("Get all store successfully")
                .result(storeService.getAllStore())
                .build();
    }

}
