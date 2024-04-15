package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.Entity.Staff;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StaffController {
    @GetMapping("/staff")
    public String getStaff() {
        return  "xin chaof";
    }

}
