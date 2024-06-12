package HTTTQL.pizza_project_be.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReportResponse {
    private String currentRevenue;
    private String lastRevenue;
    private String currentTotalRevenue;
    private String lastTotalRevenue;
}
