import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import DeliveryBanner from "~/assets/delivery";
import { Tooltip, alpha } from "@mui/material";
import { primary } from "~/context/ColorContext";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

function HomeStaff() {
  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Dashboard</span>
        <div className="header__top--breadcrumbs">
          <span className="text-gray-1 font-[600]">Home</span>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Dashboard</span>
        </div>
      </section>
      <section className="w-full h-[450px] flex gap-[30px]">
        <div className="w-[350px] h-full bg-green/70 rounded-lg shadow flex-center flex-col text-white">
          <span className="text-[28px]">Welcome back!</span>
          <span className="text-[28px] font-[600]">Start Your Delivery</span>
          <DeliveryBanner size={250} />
        </div>
        <div className="flex-1 h-full bg-white rounded-lg shadow  p-[30px] flex flex-col justify-between">
          <div className="font-[600] text-sm">Delivery Stats</div>
          <div className="w-full h-[350px]">
            <div className="text-lg font-[700]">%14,094</div>
            <div className="text-sm font-[600] text-gray-400">
              Deliveries in 30 Days
            </div>
            <ResponsiveContainer className="text-[14px]">
              <AreaChart
                data={data}
                margin={{
                  top: 30,
                  right: 10,
                  left: -20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke={alpha(primary, 0.7)}
                  fill={alpha(primary, 0.3)}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeStaff;
