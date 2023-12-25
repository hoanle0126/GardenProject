/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Checkbox, Rating, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { axiosClient } from "~/axios/AxiosClient";
import ButtonStyle from "~/Components/button";

const SideBar = ({ filter, setFilter }) => {
  const [price, setPrice] = useState([0, 50]);
  const [choose, setChoose] = useState([]);
  const [rating, setRating] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    setLoading(true);
    axiosClient
      .get("/categories")
      .then((data) => {
        setCategories(data.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleSubmit = () => {
    setFilter({ ...filter, price: price });
  };

  useEffect(() => {
    setFilter({ ...filter, categories: choose });
  }, [choose]);

  useEffect(() => {
    setFilter({ ...filter, ratings: rating });
  }, [rating]);

  return (
    <aside className="w-[450px]">
      <div className="w-full h-[60px] pl-[120px] border-b flex items-center text-[21px] font-[600]">
        Filter
      </div>
      <div className="w-full">
        <div className="pl-[120px] flex flex-col w-full justify-end gap-[10px] border-b py-[30px]">
          <span className="font-[600] text-green-main-dark">Categories</span>
          {loading ? (
            <span className="px-[20px]">Loading...</span>
          ) : (
            categories.map((category) => (
              <span key={category.id} className="flex items-center">
                <Checkbox
                  value={category.id}
                  onChange={(e) =>
                    e.target.checked
                      ? setChoose([...choose, category.name])
                      : setChoose((current) =>
                          current.filter((c) => c !== category.name)
                        )
                  }
                />
                <span>{category.name}</span>
              </span>
            ))
          )}
        </div>
        <div className="pl-[120px] pr-[60px] flex flex-col w-full items-start gap-[10px] py-[30px] border-b">
          <span className="font-[600] text-green-main-dark">Price range</span>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={50}
          />
          <ButtonStyle variant={"outlined"} onClick={handleSubmit}>
            Set Price
          </ButtonStyle>
        </div>
        <div className="pl-[120px] flex flex-col w-full items-start gap-[10px] py-[30px]">
          <span className="font-[600] text-green-main-dark">Rating</span>
          {[5, 4, 3, 2, 1].map((item) => (
            <span key={item} className="flex items-center gap-[10px]">
              <Checkbox
                onChange={(e) => {
                  e.target.checked
                    ? setRating([...rating, item])
                    : setRating((current) => current.filter((c) => c !== item));
                }}
              />
              <Rating value={item} readOnly />
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
