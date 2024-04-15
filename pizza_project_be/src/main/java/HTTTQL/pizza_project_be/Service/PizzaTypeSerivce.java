package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.PizzaType;
import HTTTQL.pizza_project_be.Repository.PizzaRepository;
import HTTTQL.pizza_project_be.Repository.PizzaTypeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PizzaTypeSerivce {
    private final PizzaTypeRepository pizzaTypeRepository;
    public List<PizzaType> getAllPizzaType(){
        return pizzaTypeRepository.findAll();
    }
    public List<PizzaType> getAllPizzaTypeByCategory(String category){
        return pizzaTypeRepository.findAllByCategory(category);
    }
}
