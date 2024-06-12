/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import axios from 'axios';
import { formatCurrency } from '../../utils';
import { useNavigate } from 'react-router-dom';

const TABS = [
  { label: "All", value: "ALL" },
  { label: "Classic", value: "Classic Pizza" },
  { label: "Supreme", value: "Supreme Pizza" },
  { label: "Vegetarian", value: "Vegetarian Pizza" },
  { label: "Chicken", value: "Chicken Pizza" },
];

const TABLE_HEAD = ["Pizza", "Nhỏ", "Vừa", "Lớn", ""];


export function TablePizza() {
    const [pizza, setPizza] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [category,setCategory] = useState("All")
    const [filteredPizza, setFilteredPizza] = useState(pizza);
    const navigate = useNavigate()
    useEffect(() => {
      const fetchPizzas = async () => {
        try {
          const response = await axios('http://localhost:8080/api/v1/pizzaType/all');
          setPizza(response.data.result);
          setFilteredPizza(response.data.result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      fetchPizzas();
    }, []);
    useEffect(() => {
      let tempPizza = [];
      console.log(searchText);
      if (category === "ALL") {
        tempPizza = pizza.filter((value) => value.name.toLowerCase().includes(searchText.toLowerCase()));
      } else {
        tempPizza = pizza.filter((value) => value.name.toLowerCase().includes(searchText.toLowerCase()) && value.category === category);
      }
      setFilteredPizza(tempPizza);
    }, [category, searchText]);
    const handleClickUpdatePizza =(id)=>{
      navigate(`/admin/pizza/${id}`)
    }
  return (
    <Card className="w-full mt-6">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row p-3">
          <Tabs value="ALL" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={()=>setCategory(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              label="Tìm kiếm theo tên"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          <Button className="flex items-center gap-3 h-[40px]" size="sm" onClick={()=>handleClickUpdatePizza(0)}>
            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm mới pizza
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-y-scroll mt-1 max-h-[555px] p-0">
        <table className=" w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredPizza.map(
              ({ image, name, category,pizzas,pizzaTypeId}, index) => {
                const isLast = index === filteredPizza.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={image} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {category}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatCurrency(pizzas[2]?.price)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatCurrency(pizzas[1]?.price)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formatCurrency(pizzas[0]?.price)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Chỉnh sửa Pizza"
                      >
                        <IconButton variant="text" onClick={()=>handleClickUpdatePizza(pizzaTypeId)}>
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
