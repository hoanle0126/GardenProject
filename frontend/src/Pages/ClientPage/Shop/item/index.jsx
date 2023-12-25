/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  Rating,
  Skeleton,
  alpha,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ButtonStyle from "~/Components/button";
import { axiosClient } from "~/axios/AxiosClient";
import { useStateContext } from "~/context/ApiContext";
import TickIcon from "icons/tick";
import { primary } from "~/context/ColorContext";
import ItemImage from "./ItemImage";

function ShopItemPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("1");
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState({ quantity: 1 });
  const { setUser, user } = useStateContext();
  const [open, setOpen] = useState(false);

  const getProduct = () => {
    setLoading(true);
    axiosClient
      .get(`/products/${id}`, { quantity: 1 })
      .then((data) => {
        setProduct(data.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const addCart = () => {
    if (user) {
      axiosClient.post(`/cart/${product.id}`, quantity).then((data) => {
        setUser(data.data.data);
      });
      setOpen(true);
      setTimeout(() => setOpen(false), 1500);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getProduct();
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[60px] flex flex-col gap-[90px]">
      {loading ? (
        <section className="px-[120px] py-[30px] w-full h-[560px] flex gap-[30px]">
          <Skeleton variant="rounded" width={500} height={500} />
          <div className="flex-1 h-full flex flex-col items-start gap-[20px]">
            <Skeleton variant="rectangular" width={300} height={48} />
            <Skeleton variant="rectangular" width={200} height={32} />
            <Skeleton variant="rectangular" width={500} height={200} />
          </div>
        </section>
      ) : (
        <section className="px-[120px] py-[30px] w-full h-[560px] flex gap-[30px]">
          <ItemImage product={product}/>
          <div className="flex-1 h-full flex flex-col w-full items-start">
            <div className="flex flex-col gap-[10px]">
              <span className="text-[48px] font-[600]">{product.name}</span>
              <span className="text-[32px] mb-[20px]">
                ${product.price?.base_price}
              </span>
              <div className="h-[40px] flex gap-[10px]">
                <input
                  type="number"
                  value={quantity.quantity}
                  onChange={(e) => setQuantity({ quantity: e.target.value })}
                  className="w-[70px] h-[40px] border px-[10px] outline-none"
                />
                <ButtonStyle variant={"contained"} onClick={addCart}>
                  Add Cart
                </ButtonStyle>
                <Modal
                  open={open}
                  onClose={() => setOpen(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                  slotProps={{
                    backdrop: { style: { opacity: 0 } },
                  }}
                >
                  <div className="w-[400px] h-[250px] bg-black/80 absolute-center flex-center flex-col rounded-xl">
                    <TickIcon size={120} primary={alpha(primary, 0.8)} />
                    <span className="text-white/80 text-[32px]">
                      Add to cart
                    </span>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="flex-1 w-full pt-[30px]">
              <div>
                <ButtonGroup>
                  <Button
                    variant={`${tab === "1" ? "contained" : "outlined"}`}
                    onClick={() => setTab("1")}
                  >
                    Description
                  </Button>
                  <Button
                    variant={`${tab === "2" ? "contained" : "outlined"}`}
                    onClick={() => setTab("2")}
                  >
                    Features
                  </Button>
                </ButtonGroup>
              </div>
              {tab === "1" ? (
                <div className="flex-1 py-[30px] w-[80%]">
                  {product.description}
                </div>
              ) : (
                <div className="flex-1 py-[30px] w-[80%] flex flex-col gap-[10px]">
                  <div className="flex items-start gap-[10px]">
                    <span className="w-[120px]">Common name</span>
                    <span className="flex-1">{product.feature?.common_name}</span>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    <span className="w-[120px]">Science name</span>
                    <span className="flex-1">{product.feature?.science_name}</span>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    <span className="w-[120px]">Plant family</span>
                    <span className="flex-1">{product.feature?.plant_family}</span>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    <span className="w-[120px]">Source</span>
                    <span className="flex-1">{product.feature?.source}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      <section className="w-full px-[120px] p-[30px] flex flex-col gap-[30px]">
        <div className="w-full text-[28px] font-[600]">Reviews</div>
        <div className="flex flex-col gap-[10px] -mt-[30px]">
          <div className="flex gap-[10px] items-center">
            <Rating size="large" value={product?.avg_rating} precision={0.1} readOnly />
            <span className="text-[21px]">({product.review?.length})</span>
          </div>
          <span>Based {product.review?.length} comments</span>
        </div>
        <div>
          <ButtonStyle variant={"contained"}>Sort</ButtonStyle>
        </div>
        <div className="flex flex-col gap-[30px] mt-[30px]">
          {product.review?.map((rv) => (
            <div key={rv.id} className="flex flex-col min-h-[40px]">
              <div className="flex gap-[5px] h-[30px] items-center">
                <Avatar src={rv.user?.avatar} sx={{ width: "30px", height: "30px" }} />
                <span className="text-[21px] font-[600] text-green-main-dark">
                  {rv.user?.name}
                </span>
                <Rating size="small" value={rv?.rating} readOnly/>
              </div>
              <div className="pl-[35px] text-gray-500">
                {rv.comment}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ShopItemPage;
