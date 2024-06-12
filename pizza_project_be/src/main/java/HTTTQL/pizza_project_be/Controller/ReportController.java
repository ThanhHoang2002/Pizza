package HTTTQL.pizza_project_be.Controller;

import HTTTQL.pizza_project_be.DTO.Response.ApiResponse;
import HTTTQL.pizza_project_be.DTO.Response.ReportByYearResponse;
import HTTTQL.pizza_project_be.DTO.Response.ReportResponse;
import HTTTQL.pizza_project_be.Service.ReportService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/report")
@AllArgsConstructor
public class ReportController {
    private final ReportService reportService;
    @PreAuthorize("hasAuthority('CREAT_DATA')")
    @GetMapping("/A")
    public ApiResponse<ReportResponse> getReportA(
            @RequestParam("year") int year,
            @RequestParam("quater") int quater
    ){
       ReportResponse response= reportService.getReportA(year, quater);
        return ApiResponse.<ReportResponse>builder()
                .message("Get report A successfully")
                .result(response)
                .build();
    }
    @PreAuthorize("hasAuthority('CREAT_DATA')")
    @GetMapping("/B")
    public ApiResponse<ReportByYearResponse> getReportB(
            @RequestParam("year") int year
    ){
        ReportByYearResponse response = reportService.getReportB(year);
        return ApiResponse.<ReportByYearResponse>builder()
                .message("Get report B successfully")
                .result(response)
                .build();
    }
}
