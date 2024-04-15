package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Store;
import HTTTQL.pizza_project_be.Repository.StoreRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StoreService {
    private final StoreRepository storeRepository;
    public List<Store> getAllStore(){
        return storeRepository.findAll();
    }
}
