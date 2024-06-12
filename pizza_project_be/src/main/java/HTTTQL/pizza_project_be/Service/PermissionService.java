package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.Entity.Permission;
import HTTTQL.pizza_project_be.Repository.PermissionRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionService {
    PermissionRepo permissionRepository;

    public Permission create(Permission request){
        var permission = permissionRepository.save(request);
        return permission;
    }

    public List<Permission> getAll(){
        return permissionRepository.findAll();
    }

    public void delete(String permission){
        permissionRepository.deleteById(permission);
    }
}
