package HTTTQL.pizza_project_be.Repository;

import HTTTQL.pizza_project_be.Entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PermissionRepo extends JpaRepository<Permission, String>{
}
