import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

// utils.js
export function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
  // customLocalStorage.js
export const customLocalStorage = {
  setItem(key, value) {
    localStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent('localStorageChanged', { detail: { key, value } }));
  },
  getItem(key) {
    return localStorage.getItem(key);
  },
  removeItem(key) {
    localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent('localStorageChanged', { detail: { key, value: null } }));
  }
};
export const translate = (value) => {
  switch (value.toLowerCase()) {
    case "pizzas":
      return "Pizza";
    case "foods":
      return "Đồ Ăn";
    case "combos":
      return "Combo";
    case "stores":
      return "Cửa Hàng";
    case "users":
      return "Nhân viên";
    case "clients":
      return "khách hàng";
    case "report":
      return "Báo cáo"
    default:
      return "dashboard";
  }
}
export const generateReport1 = (reportData) => {
  // Đọc file Word mẫu.
  // const reportData = {
  //     currentRevenue: "1.000.000",
  //     lastRevenue: "900.000",
  //     currentTotalRevenue: "900.000",
  //     lastTotalRevenue: "800.000",
  //     quater: "2",
  //     year: 2024,
  //     day: 12,
  //     month: 6
  // };
  fetch('http://localhost:3000/template.docx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
          const zip = new PizZip(data);
          const doc = new Docxtemplater(zip);

          // Điền dữ liệu vào template
          doc.setData(reportData);

          try {
              doc.render();
              const outputBuffer = doc.getZip().generate({ type: 'blob' });

              // Tạo một URL cho file đầu ra
              const url = URL.createObjectURL(outputBuffer);

              // Tải file
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'report.docx');
              document.body.appendChild(link);
              link.click();
          } catch (error) {
              console.error(error);
              alert('Error generating report');
          }
      })
      .catch((error) => {
          console.error(error);
          alert('Error loading template');
      });
};
export const generateReport2 = (reportData) => {
  // Đọc file Word mẫu.
  // const reportData = {
  //     currentRevenue: "1.000.000",
  //     lastRevenue: "900.000",
  //     currentTotalRevenue: "900.000",
  //     lastTotalRevenue: "800.000",
  //     quater: "2",
  //     year: 2024,
  //     day: 12,
  //     month: 6
  // };
  fetch('http://localhost:3000/report.docx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
          const zip = new PizZip(data);
          const doc = new Docxtemplater(zip);

          // Điền dữ liệu vào template
          doc.setData(reportData);

          try {
              doc.render();
              const outputBuffer = doc.getZip().generate({ type: 'blob' });

              // Tạo một URL cho file đầu ra
              const url = URL.createObjectURL(outputBuffer);

              // Tải file
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'report.docx');
              document.body.appendChild(link);
              link.click();
          } catch (error) {
              console.error(error);
              alert('Error generating report');
          }
      })
      .catch((error) => {
          console.error(error);
          alert('Error loading template');
      });
};

