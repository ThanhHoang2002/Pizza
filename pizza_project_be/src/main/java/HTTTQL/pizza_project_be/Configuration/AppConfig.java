package HTTTQL.pizza_project_be.Configuration;

import HTTTQL.pizza_project_be.Entity.User;
import HTTTQL.pizza_project_be.Enums.Role;
import HTTTQL.pizza_project_be.Repository.UserRepo;
import jakarta.servlet.FilterRegistration;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.HashSet;

@Configuration
@Slf4j
public class AppConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
    @Bean
    ApplicationRunner applicationRunner(UserRepo userRepository){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        return args -> {
            if (userRepository.findByUsername("admin5").isEmpty()){
                var roles = new HashSet<String>();
                roles.add(Role.MANAGER.name());

                User user = User.builder()
                        .username("admin5")
                        .password(passwordEncoder.encode("admin"))
                        .name("admin5")
                        .build();

                userRepository.save(user);
                log.warn("admin user has been created with default password: admin, please change it");
            }
        };
    }
}
