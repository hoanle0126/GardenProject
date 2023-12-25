import { Link } from "react-router-dom";
import BackIcon from "~/assets/icons/back";
import { alpha } from "@mui/material";
import { primary, secondary } from "~/context/ColorContext";
import { useEffect, useState } from "react";
import PendingOrder from "./PendingOrder";
import { axiosClient } from "~/axios/AxiosClient";
import DeliveryOrder from "./DeliveryOrder";
import CompletedOrder from "./CompletedOrder";

function OrderCommerce() {
  const [tab, setTab] = useState(1);

  const [orders, setOrders] = useState();

  const getOrders = () => {
    axiosClient.get("/user/order").then((data) => {
      setOrders(data.data);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <main className="pt-[90px] px-[120px]  pb-[60px]">
      <section className="w-full shadow-md p-[20px] card flex flex-col gap-[60px] mb-[30px]">
        <div className="text-[28px] font-[600] flex items-center gap-[5px]">
          <Link to={-1}>
            <BackIcon
              size={50}
              primary={alpha(primary, 0.5)}
              secondary={alpha(secondary, 0.9)}
              tertiary={alpha(primary, 0.9)}
            />
          </Link>
          <span>Order</span>
        </div>
        <div className="grid grid-cols-3">
          <div
            className={`flex-center text-[21px] h-[40px] border-b-[4px] font-[600] cursor-pointer duration-300 ${
              tab === 1
                ? "border-green/70 text-green/70"
                : "border-transparent text-black"
            }`}
            onClick={() => setTab(1)}
          >
            Pending
          </div>
          <div
            className={`flex-center text-[21px] h-[40px] border-b-[4px] font-[600] cursor-pointer duration-300 ${
              tab === 2
                ? "border-green/70 text-green/70"
                : "border-transparent text-black"
            }`}
            onClick={() => setTab(2)}
          >
            Delivering
          </div>
          <div
            className={`flex-center text-[21px] h-[40px] border-b-[4px] font-[600] cursor-pointer duration-300 ${
              tab === 3
                ? "border-green/70 text-green/70"
                : "border-transparent text-black"
            }`}
            onClick={() => setTab(3)}
          >
            Completed
          </div>
        </div>
        {tab===1&&<PendingOrder orders={orders} />}
        {tab===2&&<DeliveryOrder orders={orders} />}
        {tab===3&&<CompletedOrder orders={orders} />}
      </section>
    </main>
  );
}

export default OrderCommerce;
