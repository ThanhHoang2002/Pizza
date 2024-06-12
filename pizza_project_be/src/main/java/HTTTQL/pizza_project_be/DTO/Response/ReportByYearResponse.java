package HTTTQL.pizza_project_be.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReportByYearResponse {
    private String currentRevenue;
    private String currentFee;
    private String currentValue10;
    private String currentValue11;
    private String currentValue20;
    private String currentValue25;
    private String currentValue26;
    private String currentValue30;
    private String currentValue50;
    private String currentValue51;
    private String currentValue52;
    private String currentValue60;
}
