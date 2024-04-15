package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Combo;
import HTTTQL.pizza_project_be.Repository.ComboRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ComboService {
    private final ComboRepository comboRepository;
    public List<Combo> getComboByCategory(String category){
        return comboRepository.findComboByCategory(category);
    }
}
