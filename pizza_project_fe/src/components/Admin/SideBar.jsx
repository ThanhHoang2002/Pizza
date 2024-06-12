import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PowerIcon,
  CircleStackIcon,
  PrinterIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { translate } from "../../utils";
export function SidebarWithLogo(props) {
  const [open, setOpen] = React.useState(0);
  const setCurrentPage = props.setCurrentPage
  const handleLogout = props.handleLogout
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  
  const handleChosePage = (value) =>{
    navigate(`${value}`)
    setCurrentPage(translate(value))
  }
  const navigate = useNavigate();
  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img className="w-[120px] cursor-pointer" src="https://firebasestorage.googleapis.com/v0/b/pizza-fe093.appspot.com/o/image%2Flogo%2Flogo.png?alt=media&token=16501ae5-ad8f-40da-86d4-0ebe1a4e9a0e" alt="brand" onClick={()=>handleChosePage("dashboard")}/>
      </div>
      <List>
          <ListItem className="border-b-0 p-3" onClick={()=>handleChosePage("dashboard")}>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
          </ListItem>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <CircleStackIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Quản lý thông tin
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">           
              <ListItem onClick={()=>handleChosePage("pizzas")}> 
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Pizza   
              </ListItem>
              <ListItem onClick={()=>handleChosePage("foods")}> 
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Đồ Ăn
              </ListItem>
              <ListItem onClick={()=>handleChosePage("combos")}> 
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Combo   
              </ListItem>
              <ListItem onClick={()=>handleChosePage("stores")}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Cửa Hàng
              </ListItem>
              <ListItem onClick={()=>handleChosePage("users")}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Nhân Viên
              </ListItem>
              <ListItem onClick={()=>handleChosePage("clients")}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Khách Hàng
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem onClick={()=>handleChosePage("Report")}>
          <ListItemPrefix>
            <PrinterIcon className="h-5 w-5" />
          </ListItemPrefix>
          Xuất báo cáo
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Đăng xuất
        </ListItem>
      </List>
    </Card>
  );
}