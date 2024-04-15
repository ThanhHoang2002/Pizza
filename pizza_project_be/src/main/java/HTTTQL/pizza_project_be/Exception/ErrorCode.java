package HTTTQL.pizza_project_be.Exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    UNKNOWN_ERROR(9999, "Unknown error", HttpStatus.INTERNAL_SERVER_ERROR),
    ENTITY_NOT_FOUND(1000, "Entity not found", HttpStatus.NOT_FOUND),
    INVALID_INPUT(1001, "Invalid input", HttpStatus.BAD_REQUEST),
    DUPLICATE_ENTITY(1002, "Duplicate entity", HttpStatus.BAD_REQUEST),
    INVALID_STATE(1003, "Invalid state", HttpStatus.BAD_REQUEST),
    UNAUTHORIZED(1004, "Unauthorized", HttpStatus.UNAUTHORIZED),
    FORBIDDEN(1005, "Forbidden", HttpStatus.FORBIDDEN),
    ;
    private int code;
    private String message;
    private HttpStatusCode httpStatusCode;
}
