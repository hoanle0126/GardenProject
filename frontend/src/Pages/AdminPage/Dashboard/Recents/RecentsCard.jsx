import { useEffect, useState } from "react";
import Item from "./Orders/Item";
import { axiosClient } from "~/axios/AxiosClient";

const RecentsCard = () => {
  const [value, setValue] = useState(1);
  const [categories, setCategories] = useState();

  const getCategories = () => {
    axiosClient.get("/categories-order").then((data) => {
      setCategories(data.data.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="h-[450px] card lg:col-span-6 col-span-12 p-[20px] flex flex-col gap-[20px]">
      <div className="text-sm font-[600] text-dark">Recent Orders</div>
      <div className="w-full h-[70px] flex gap-[20px]">
        {categories?.map((category) => (
          <div
            key={category.id}
            className={`tab ${
              value === category.id && "tab--active"
            } flex flex-col items-center `}
            onClick={() => setValue(category.id)}
          >
            <img
              className="w-[70px] h-[70px] rounded-2xl"
              src={category.thumbnail}
              alt=""
            />
          </div>
        ))}
      </div>
      <Item id={value} />
    </div>
  );
};

export default RecentsCard;
