package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.DTO.Request.AuthenticationRequest;
import HTTTQL.pizza_project_be.DTO.Response.AuthenticationResponse;
import HTTTQL.pizza_project_be.DTO.Request.IntrospectRequest;
import HTTTQL.pizza_project_be.DTO.Response.IntrospectResponse;
import HTTTQL.pizza_project_be.Entity.Staff;
import HTTTQL.pizza_project_be.Entity.User;
import HTTTQL.pizza_project_be.Enums.ErrorCode;
import HTTTQL.pizza_project_be.Exception.AppException;
import HTTTQL.pizza_project_be.Repository.UserRepo;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;
import java.util.StringJoiner;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    UserRepo userRepository;

    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SIGNER_KEY;

    public IntrospectResponse introspect(IntrospectRequest request)
            throws JOSEException, ParseException {
        var token = request.getToken();

        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expiryTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(verifier);

        return IntrospectResponse.builder()
                .valid(verified && expiryTime.after(new Date()))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        Optional<User> user = userRepository.findByUsername(request.getEmail());


        if (user.isEmpty()) {
            return AuthenticationResponse.builder()
                    .authenticated(false)
                    .build();
        }
        boolean authenticated = passwordEncoder.matches(request.getPassword(),
                user.get().getPassword());

        if (!authenticated )
            return AuthenticationResponse.builder()
                    .authenticated(false)
                    .build();

        var token = generateToken(user.get());
        user.get().setPassword(null);
        if( user.get() instanceof Staff){
            return AuthenticationResponse.builder()
                    .token(token)
                    .authenticated(true)
                    .user((Staff) user.get())
                    .build();
        }else{
            return AuthenticationResponse.builder()
                    .token(token)
                    .authenticated(true)
                    .user(user.get())
                    .build();
        }
    }

    private String generateToken(User user) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getUsername())
                .issuer("pizzeria")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope", buildScope(user))
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create token", e);
            throw new RuntimeException(e);
        }
    }

    private String buildScope(User user){
        StringJoiner stringJoiner = new StringJoiner(" ");

        if (!CollectionUtils.isEmpty(user.getRoles()))
            user.getRoles().forEach(role -> {
                stringJoiner.add("ROLE_" + role.getName());
                if (!CollectionUtils.isEmpty(role.getPermissions()))
                    role.getPermissions()
                            .forEach(permission -> stringJoiner.add(permission.getName()));
            });

        return stringJoiner.toString();
    }

}