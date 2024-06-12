import React from 'react';
import { TableReport } from '../../components/Admin/TableReport';
import { generateReport1, generateReport2 } from '../../utils';
import axios from 'axios';
const ReportGenerator = () => {
    const exportReport = (value) => {
        const token = localStorage.getItem('token');
        if(value.report==="A"){
            axios.get(`http://localhost:8080/api/v1/report/A?year=${value.year}&quater=${value.quater}`,
                {headers: {
                    'Authorization': `Bearer ${token}`
                }}
            )
            .then(response => {
                const reportData = {...response.data.result,
                    year: value.year,
                    quater: value.quater,
                    month: new Date().getMonth()+1,
                    day: new Date().getDate(),

                }// Lấy dữ liệu từ phản hồi
                generateReport1(reportData);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
        }else{
            axios.get(`http://localhost:8080/api/v1/report/B?year=${value.year}`,
                {headers: {
                    'Authorization': `Bearer ${token}`
                }}
            )
            .then(response => {
                const reportData = {...response.data.result,
                    year: value.year,
                    quater: value.quater,
                    month: new Date().getMonth()+1,
                    day: new Date().getDate(),
                    
                } // Lấy dữ liệu từ phản hồi
                generateReport2(reportData);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });

        }
    }
  return (
    <div>
      <div className='pt-8 h-full'>
        <TableReport exportReport= {exportReport}/>
      </div>
    </div>
  );
};

export default ReportGenerator;
