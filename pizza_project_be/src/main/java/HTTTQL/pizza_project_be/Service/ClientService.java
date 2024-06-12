package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.DTO.Request.AuthenticationRequest;
import HTTTQL.pizza_project_be.Entity.Client;
import HTTTQL.pizza_project_be.Repository.ClientRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ClientService {
    private final ClientRepo clientRepo;
    public boolean signUpClient(Client client){
        if(clientRepo.findByEmail(client.getEmail()) != null){
            return false;
        }
        PasswordEncoder passswordEncoder = new BCryptPasswordEncoder(10);
        client.setPassword(passswordEncoder.encode(client.getPassword()));
        clientRepo.save(client);
        return true;
    }
    public Client clientAuthenticate(AuthenticationRequest authenticationRequest){
        Client client = clientRepo.findByEmail(authenticationRequest.getEmail());
        if(client == null){
            return null;
        }
        PasswordEncoder passswordEncoder = new BCryptPasswordEncoder(10);
        if(passswordEncoder.matches(authenticationRequest.getPassword(), client.getPassword())){
            return client;
        }
        return null;
    }
}
