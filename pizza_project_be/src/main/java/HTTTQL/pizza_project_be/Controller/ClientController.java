package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Request.AuthenticationRequest;
import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.Entity.Client;
import HTTTQL.pizza_project_be.Service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/client")
@AllArgsConstructor
public class ClientController {
    private final ClientService clientService;

    @PostMapping("/signup")
    public ApiResponse<String> signUpClient(@RequestBody Client client){
        boolean result = clientService.signUpClient(client);
        if(result){
            return ApiResponse.<String>builder()
                    .message("Sign up successfully")
                    .result("Sign up successfully")
                    .build();
        }
        return ApiResponse.<String>builder()
                .message("Sign up failed")
                .result("Sign up failed")
                .build();
    }
    @PostMapping("/authenticate")
    public ApiResponse<Client> clientAuthenticate(@RequestBody AuthenticationRequest authenticationRequest){
        Client client = clientService.clientAuthenticate(authenticationRequest);
        if(client == null){
            return ApiResponse.<Client>builder()
                    .message("Authenticate failed")
                    .result(null)
                    .build();
        }
        return ApiResponse.<Client>builder()
                .message("Authenticate successfully")
                .result(client)
                .build();
    }
}
