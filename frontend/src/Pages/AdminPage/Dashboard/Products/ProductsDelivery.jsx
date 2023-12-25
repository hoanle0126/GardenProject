import { useEffect, useState } from "react";
import { axiosClient } from "~/axios/AxiosClient";

const ProductsDelivery = () => {
  const [orders, setOrders] = useState();

  const getOrders = () => {
    axiosClient.get("/delivery").then((data) => {
      setOrders(data.data.data);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="h-[450px] card md:col-span-4 col-span-12 p-[20px] font-[600] flex flex-col gap-[20px]">
      <div className=" text-sm text-dark">Product Delivery</div>
      <div className=" text-default text-gray-1 mt-[-25px]">
        {orders&&orders[0].products.length} Products Shipped
      </div>
      <div className="w-full flex-1 flex flex-col gap-[20px] overflow-y-auto hideScrollBar">
        {orders &&
          orders[0].products.map((order) => (
            <div
              key={order.id}
              className="w-full h-[70px] border border-dashed border-gray-1 rounded-xl"
            >
              <div className="w-full h-[70px] pl-[5px] flex items-center gap-[10px]">
                <img
                  src={order.thumbnail}
                  alt=""
                  className="h-[60px] w-[60px] rounded-lg"
                />
                <span>{order.name}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsDelivery;
