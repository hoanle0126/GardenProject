/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "./SideBar";
import { CircularProgress, Pagination, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import Sort from "./Sort";
import { axiosClient } from "~/axios/AxiosClient";
import ButtonStyle from "~/Components/button";

function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [page, setPage] = useState({
    current_page: 1,
    from: 1,
    last_page: 1,
  });

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "Default",
    categories: [],
    ratings: [],
    price: [0, 50],
  });
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    setLoading(true);
    axiosClient
      .post(`/products/list?page=${page.current_page}`, filter)
      .then((data) => {
        setProducts(data.data.data);
        setPage(data.data.meta);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, [filter,page.current_page]);

  return (
    <div className="pt-[60px] flex">
      <SideBar filter={filter} setFilter={setFilter} />
      <main className="flex-1 border-l">
        <Sort filter={filter} setFilter={setFilter} />
        {loading === true ? (
          <section className="w-full flex-center h-[100px]">
            <CircularProgress/>
          </section>
        ) : (
          <section className="w-full max-h-[1200px] grid grid-cols-3 gap-[60px]  overflow-hidden pl-[60px] pr-[120px] py-[30px] ">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl h-[350px] flex flex-col items-center p-[20px]"
              >
                <img
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  className="w-[220px] h-[180px]"
                />
                <div className="flex flex-col items-start w-full pt-[10px] justify-between flex-1">
                  <div>
                    <span className="text-[21px] font-[600] text-green-main-dark">
                      {product.name}
                    </span>
                    <span className="flex items-center gap-[5px]">
                      <Rating value={product.avg_rating} readOnly />(
                      {product.review?.length})
                    </span>
                  </div>
                  <div className="flex w-full justify-between">
                    <span className="text-[24px] text-green-main-dark">
                      ${product.price?.base_price}
                    </span>
                    <ButtonStyle variant={"outlined"} to={`${product.id}`}>
                      Details
                    </ButtonStyle>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
        <section className="w-full h-[60px] flex items-center pr-[120px] justify-end pt-[60px] pb-[120px]">
          <Pagination
            count={page.last_page}
            page={page.current_page}
            onChange={(e, value) => setPage({ ...page, current_page: value })}
            shape="rounded"
            color="primary"
          />
        </section>
      </main>
    </div>
  );
}

export default ShopPage;
