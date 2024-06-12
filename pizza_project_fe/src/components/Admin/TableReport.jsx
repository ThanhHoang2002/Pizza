import { Card, Typography } from "@material-tailwind/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
const TABLE_HEAD = ["Danh Sách Báo Cáo", ""];
 
const TABLE_ROWS = [
  {
    name: "Báo cáo kết quả hoạt động kinh doanh giữa niên độ quý 1 năm 2024",
    report:"A",
    quater: 1,
    year: 2024,
  },
  {
    name: "Báo cáo kết quả hoạt động kinh doanh năm 2023",
    report:"B",
    year: 2023,
  },
  {
    name: "Báo cáo kết quả hoạt động kinh doanh giữa niên độ quý 4 năm 2023",
    report:"A",
    quater: 4,
    year: 2023,
  },
  {
    name: "Báo cáo kết quả hoạt động kinh doanh giữa niên độ quý 3 năm 2023",
   report:"A",
    quater: 3,
    year: 2023,
  },
  {
    name: "Báo cáo kết quả hoạt động kinh doanh giữa niên độ quý 2 năm 2023",
    report:"A",
    quater: 2,
    year: 2023,
  },
  {
    name: "Báo cáo kết quả hoạt động kinh doanh giữa niên độ quý 1 năm 2023",
   report:"A",
    quater: 1,
    year: 2023,
  },
];
 
export function TableReport(props) {
    const exportReport = props.exportReport;
  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-xl"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((value, index) => (
            <tr key={value.name} className="even:bg-blue-gray-50/50">
              <td className="p-4 w-[93%]">
                <Typography variant="small" color="blue-gray" className="font-normal text-[17px]">
                  {value.name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" variant="small" color="blue-gray" className="font-medium cursor-pointer"
                onClick={()=>exportReport(value)}>
                 <ArrowDownTrayIcon className="h-5 w-5"/>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}