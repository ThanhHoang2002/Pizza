package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Pizza;
import HTTTQL.pizza_project_be.Repository.PizzaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PizzaService {
    private final PizzaRepository pizzaRepository;
    public List<Pizza> getAllPizza(){
        return pizzaRepository.findAll();
    }
}
