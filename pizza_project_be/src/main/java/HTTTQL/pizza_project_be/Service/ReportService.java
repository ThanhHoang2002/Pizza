package HTTTQL.pizza_project_be.Service;

import HTTTQL.pizza_project_be.DTO.Response.ReportByYearResponse;
import HTTTQL.pizza_project_be.DTO.Response.ReportResponse;
import HTTTQL.pizza_project_be.Entity.Order;
import HTTTQL.pizza_project_be.Repository.OrderRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ReportService {
    private final OrderRepo orderRepo;
    public ReportResponse getReportA(int year, int quater){
        ReportResponse reportResponse = new ReportResponse();
        if(year == 2024){
            if(quater == 1){
                reportResponse.setCurrentRevenue("2.611.526.000");
                reportResponse.setLastRevenue("2.580.023.000");
                reportResponse.setCurrentTotalRevenue("2.089.220.800");
                reportResponse.setLastTotalRevenue("2.064.018.400");
            }
        }else if(year == 2023){
            if(quater == 1){
                reportResponse.setCurrentRevenue("2.580.023.000");
                reportResponse.setLastRevenue("0");
                reportResponse.setCurrentTotalRevenue("2.064.018.400");
                reportResponse.setLastTotalRevenue("0");
            } else if (quater == 2){
                reportResponse.setCurrentRevenue("2.611.526.000");
                reportResponse.setLastRevenue("0");
                reportResponse.setCurrentTotalRevenue("2.089.220.800");
                reportResponse.setLastTotalRevenue("0");
            } else if (quater == 3){
                reportResponse.setCurrentRevenue("2.574.245.000");
                reportResponse.setLastRevenue("0");
                reportResponse.setCurrentTotalRevenue("2.059.396.000");
                reportResponse.setLastTotalRevenue("0");
            } else if (quater == 4){
                reportResponse.setCurrentRevenue("2.501.650.000");
                reportResponse.setLastRevenue("0");
                reportResponse.setCurrentTotalRevenue("2.001.320.000");
                reportResponse.setLastTotalRevenue("0");

            }

        }
        return reportResponse;
    }
    public ReportByYearResponse getReportB(int year){
        ReportByYearResponse reportByYearResponse = new ReportByYearResponse();
        reportByYearResponse.setCurrentRevenue("10.267.444.000");
        reportByYearResponse.setCurrentFee("513.372.200");
        reportByYearResponse.setCurrentValue10("9.754.071.800");
        reportByYearResponse.setCurrentValue11("3.080.0233.200");
        reportByYearResponse.setCurrentValue20("6.673.838.600");
        reportByYearResponse.setCurrentValue25("410.697.760");
        reportByYearResponse.setCurrentValue26("616.046.640");
        reportByYearResponse.setCurrentValue30("5.647.094.200");
        reportByYearResponse.setCurrentValue50("5.647.094.200");
        reportByYearResponse.setCurrentValue51("451.767.536");
        reportByYearResponse.setCurrentValue52("677.651.304");
        reportByYearResponse.setCurrentValue60("4.517.675.360");
        return reportByYearResponse;
    }
}
