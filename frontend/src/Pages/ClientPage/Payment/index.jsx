import { Link, useNavigate } from "react-router-dom";
import BackIcon from "~/assets/icons/back";
import { primary, secondary } from "~/context/ColorContext";
import { Button, Modal, alpha } from "@mui/material";
import ButtonStyle from "~/Components/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { useStateContext } from "~/context/ApiContext";
import { useState } from "react";
import TickIcon from "~/assets/icons/tick";
import { axiosClient } from "~/axios/AxiosClient";

function PaymentCommerce() {
  const navigate = useNavigate();
  const { selectedProducts, user, setUser } = useStateContext();
  const [changeAddress, setChangeAddress] = useState(false);
  const [open, setOpen] = useState(false);

  const purchase = () => {
    console.log(selectedProducts);
    axiosClient.post("/order", selectedProducts).then((data) => {
      setUser(data.data.data);
      setOpen(true);
    });
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const sumTotal = () => {
    let total = 0;

    for (let product of selectedProducts.products) {
      total -= -(product.price.base_price * product.pivot.quantity);
    }

    return formatCurrency(total);
  };
  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column
          footer="Totals:"
          colSpan={3}
          footerStyle={{ textAlign: "right" }}
        />
        <Column footer={sumTotal} />
      </Row>
    </ColumnGroup>
  );

  const productBody = (item) => (
    <div className="flex items-center gap-[10px]">
      <img src={item.thumbnail} className="w-[60px] h-[60px] " />
      <span className="text-[21px]">{item.name}</span>
    </div>
  );

  const priceBody = (item) => (
    <div className="flex items-center gap-[10px]">
      <span>${item.price?.base_price}</span>
    </div>
  );

  return (
    <main className="pt-[90px] px-[120px]  pb-[60px]">
      <section className="w-full shadow-md p-[20px] card flex flex-col gap-[40px] mb-[30px]">
        <div className="text-[28px] font-[600] flex items-center gap-[5px]">
          <Link to={-1}>
            <BackIcon
              size={50}
              primary={alpha(primary, 0.5)}
              secondary={alpha(secondary, 0.9)}
              tertiary={alpha(primary, 0.9)}
            />
          </Link>
          <span>Payment</span>
        </div>
        <div className="w-full flex items-center gap-[10px] justify-between">
          <span className="flex gap-[30px] items-center h-[40px]">
            <span className="text-[21px]">Address:</span>
            {!changeAddress ? (
              <span className="text-[21px] text-gray-500">{user.address}</span>
            ) : (
              <input
                className="h-[40px] outline-none bg-transparent text-[21px] w-[1000px] flex items-center"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            )}
          </span>
          <ButtonStyle
            variant={"contained"}
            onClick={() => setChangeAddress(!changeAddress)}
          >
            Change
          </ButtonStyle>
        </div>
        <div className="w-full flex gap-[10px] flex-col">
          <span className="flex gap-[30px] items-center">
            <span className="text-[21px]">Products</span>
          </span>
          <DataTable
            scrollable
            scrollHeight="400px"
            footerColumnGroup={footerGroup}
            value={selectedProducts.products}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="code"
              header="Product"
              style={{ border: "none" }}
              body={productBody}
            ></Column>
            <Column
              field="price?.base_price"
              header="Price"
              style={{ border: "none" }}
              body={priceBody}
            ></Column>
            <Column
              field="pivot.quantity"
              header="Quantity"
              style={{ border: "none" }}
            ></Column>
            <Column
              field="quantity"
              header="Total Price"
              style={{ border: "none" }}
            ></Column>
          </DataTable>
        </div>
        <div className="w-full flex gap-[10px] justify-end">
          <ButtonStyle variant={"contained"} onClick={purchase}>
            Purchase
          </ButtonStyle>
        </div>
      </section>
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
          <span className="text-white/80 text-[32px]">Purchase</span>
          <Button variant="contained" onClick={() => navigate("/")}>
            Back to home
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default PaymentCommerce;
