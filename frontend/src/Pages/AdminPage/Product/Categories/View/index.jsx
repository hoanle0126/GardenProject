/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import General from "./General";
import { Button, CircularProgress } from "@mui/material";
import SideAddProduct from "./Side";
import { axiosClient } from "~/axios/AxiosClient";

export default function ViewCategory() {
  const id = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("1");
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const getCategory = () => {
    setLoading(true);
    axiosClient.get(`categories/${id.id}`).then((data) => {
      setCategory(data.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.put(`/categories/${id.id}`, category).then(() => {
      navigate("/category");
    });
  };
  return (
    <>
      <section className="header__top">
        <span className="header__top--header">View Category</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/dashboard"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <Link to={"/category"} className="text-gray-1 font-[600]">
            Category
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-black">View</span>
        </div>
      </section>
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <section className="w-full grid grid-cols-12 gap-[30px]">
          <SideAddProduct category={category} setCategory={setCategory} />
          <div className="col-span-9">
            <div className="w-full h-[60px] flex text-default font-[600] gap-[20px]">
              <div
                className={`h-[40px] duration-100 flex-center hover:border-b-[3px] hover:border-green text-black  cursor-pointer ${
                  tab === "1" && "border-b-[3px] border-green text-green"
                }`}
                onClick={() => setTab("1")}
              >
                General
              </div>
            </div>
            {tab === "1" && (
              <div className="w-full">
                <General category={category} setCategory={setCategory} />
              </div>
            )}
            <div className="flex justify-end items-center mt-[20px]">
              <Button
                variant="contained"
                sx={{
                  height: 40,
                  padding: "10px",
                  fontSize: 11,
                  fontWeight: 600,
                }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
