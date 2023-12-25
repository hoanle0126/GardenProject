import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IconButton, alpha } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { axiosClient } from "~/axios/AxiosClient";
import ButtonStyle from "~/Components/button";
import BackIcon from "~/assets/icons/back";
import { primary, secondary } from "~/context/ColorContext";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "~/context/ApiContext";

function CartPage() {
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useStateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axiosClient.get("/cart").then((data) => {
      setProducts(data.data.data.cart.product);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productBody = (item) => (
    <div className="flex items-center gap-[10px]">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-[60px] h-[60px] border border-gray-50"
      />
      <span className="text-[21px]">{item.name}</span>
    </div>
  );

  const quantityBody = (item) => (
    <>
      x <span className="text-black ">{item.pivot?.quantity}</span>
    </>
  );

  const priceBody = (item) => (
    <div className="flex items-center gap-[10px]">
      <span className="line-through text-gray-400">
        $<span>{item.price.base_price}</span>
      </span>
      <span>
        $
        <span className="text-black">
          {item.price.base_price -
            (-item.price.base_price * item.price.sales) / 100}
        </span>
      </span>
    </div>
  );

  const totalBody = (item) => (
    <>
      ${" "}
      <span className="text-black">
        {item.pivot.quantity * item.price.base_price -
          (-item.price.base_price * item.price.sales) / 100}
      </span>
    </>
  );

  const deleteCart = (id) => {
    axiosClient.delete(`/cart/${id}`).then(() => {
      getProducts();
    });
  };

  const actionBody = (item) => (
    <IconButton onClick={() => deleteCart(item.id)}>
      <Delete />
    </IconButton>
  );

  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);

  return (
    <main className="pt-[90px] px-[120px]  pb-[60px]">
      <section className="w-full shadow-md p-[20px] card flex flex-col gap-[20px] mb-[30px]">
        <div className="text-[28px] font-[600] flex items-center gap-[5px]">
          <Link to={-1}>
            <BackIcon
              size={50}
              primary={alpha(primary, 0.5)}
              secondary={alpha(secondary, 0.9)}
              tertiary={alpha(primary, 0.9)}
            />
          </Link>
          <span>Cart</span>
        </div>
        <DataTable
          value={products}
          paginator
          selectionMode={"checkbox"}
          selection={selectedProducts?.products}
          onSelectionChange={(e) => setSelectedProducts({ products: e.value })}
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="name" header="Name" body={productBody}></Column>
          <Column
            field="price"
            header="Price"
            style={{ width: "200px" }}
            body={priceBody}
          ></Column>
          <Column
            field="pivot?.quantity"
            header="Quantity"
            style={{ width: "200px" }}
            body={quantityBody}
          ></Column>
          <Column
            field="price"
            header="Total"
            style={{ width: "200px" }}
            body={totalBody}
          ></Column>
          <Column style={{ width: "0px" }} body={actionBody}></Column>
        </DataTable>
      </section>
      <section className="w-full justify-end flex">
        <ButtonStyle variant={"contained"} onClick={() => navigate("/payment")}>
          Buy
        </ButtonStyle>
      </section>
    </main>
  );
}

export default CartPage;
