/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HouseIcon from "icons/house";
import { Link, useLocation } from "react-router-dom";
import PeopleIcon from "icons/people";
import ProductIcon from "icons/product";
import DropDownIcon from "icons/dropdown";
import PersonIcon from "icons/person";
import ProductItemIcon from "icons/ProductItem";
import { primary } from "~/context/ColorContext";
import { alpha } from "@mui/material";
import CalendarIcon from "icons/calendar";

/* eslint-disable react/prop-types */
const Sidebar = ({ side }) => {
  const location = useLocation();
  const [active, setActive] = useState();
  const sideData = [
    {
      id: 1,
      icon: HouseIcon,
      name: "Dashboard",
      to: "/",
      active: active === 1 || location.pathname === "/" ? true : false,
    },
    {
      id: 2,
      icon: ProductIcon,
      childrenIcon: ProductItemIcon,
      name: "Product",
      active:
        active === 2 ||
        location.pathname === "/stock" ||
        location.pathname === "/order" ||
        location.pathname === "/category"||
        location.pathname === "/stock/add"
          ? true
          : false,
      heightChild: "100px",
      children: [
        {
          id: 1,
          name: "Stock",
          to: "/stock",
        },
        {
          id: 2,
          name: "Order",
          to: "/order",
        },
        {
          id: 3,
          name: "Category",
          to: "/category",
        },
      ],
    },
    {
      id: 3,
      icon: PeopleIcon,
      childrenIcon: PersonIcon,
      name: "Member",
      active:
        active === 3 ||
        location.pathname === "/customer" ||
        location.pathname === "/staff"
          ? true
          : false,
      heightChild: "70px",
      children: [
        {
          id: 1,
          name: "Customer",
          to: "/customer",
        },
        {
          id: 2,
          name: "Staff",
          to: "/staff",
        },
      ],
    },
    {
      id: 4,
      icon: CalendarIcon,
      name: "Calendar",
      to: "/calendar",
      active: active === 4 ? true : false,
    },
  ];

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <aside
      className={`duration-300 h-[calc(100vh-60px)] fixed top-[60px] bg-white flex flex-col gap-[10px] shadow-md z-[500] ${
        side ? "w-[270px]" : "w-0"
      }`}
    >
      <div
        className={`absolute w-full flex flex-col duration-300 top-[20px] pr-[30px] gap-[20px] ${
          side ? "left-[0px]" : "left-[-270px]"
        }`}
      >
        {sideData.map((data) => (
          <div key={data.id}>
            <Link
              to={data.to ? `${data.to}` : "#"}
              className={`px-[30px] h-[45px] flex items-center gap-[10px] text-[21px] font-[600] rounded-r-full border duration-300 ${
                data.active
                  ? "bg-gradient-to-r from-green/60 to-green border-transparent"
                  : ""
              }`}
              onClick={() =>
                active !== data.id ? setActive(data.id) : setActive(0)
              }
            >
              <data.icon
                size={30}
                primary={data.active ? "#fff" : "#333"}
                secondary={data.active ? "#fff" : "#333"}
              />
              <span className={`${data.active ? "text-white" : ""}`}>
                {data.name}
              </span>
              {data.children && (
                <div
                  className={`absolute right-[50px] duration-300 ${
                    !data.active ? " -rotate-[180deg]" : "rotate-0"
                  }`}
                >
                  <DropDownIcon
                    size={15}
                    primary={data.active ? "#fff" : "#000"}
                  />
                </div>
              )}
            </Link>
            {data.children && (
              <div
                className={`duration-300 flex flex-col gap-[10px] pl-[50px] overflow-hidden ${
                  data.active ? `h-[${data.heightChild}]` : "h-0"
                }`}
              >
                {data.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.to}
                    className={`first:mt-[10px] flex items-center gap-[5px] ${
                      location.pathname === `${child.to}` ||
                      location.pathname === `${child.to}/add`
                        ? "text-green/70"
                        : "text-black"
                    }`}
                  >
                    <data.childrenIcon
                      size={15}
                      primary={
                        location.pathname === `${child.to}` ||
                        location.pathname === `${child.to}/add`
                          ? alpha(primary, 0.7)
                          : "#000"
                      }
                    />
                    <span>{child.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
