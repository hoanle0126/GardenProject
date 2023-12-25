import { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Link } from "react-router-dom";
import { Button, CircularProgress, IconButton } from "@mui/material";
import { axiosClient } from "~/axios/AxiosClient";
import TickIcon from "icons/tick";
import { formatCurrency } from "~/function/format";

function OrderPage() {
  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    setLoading(true);
    axiosClient.get("/order").then((data) => {
      setProducts(data.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const allowExpansion = (rowData) => {
    return rowData.products?.length > 0;
  };

  const header = (
    <div className="flex justify-between items-center">
      <Button onClick={collapseAll} variant="contained">
        Collapse All
      </Button>
    </div>
  );

  const userTemplate = (item) => (
    <div className="flex items-center gap-[10px]">
      <img
        src={item.user?.avatar}
        alt={item.user?.name}
        className="w-[40px] h-[40px] rounded-md"
      />
      <span>{item.user?.name}</span>
    </div>
  );

  const productTemplate = (item) => (
    <div className="flex items-center gap-[10px]">
      <img
        src={item.thumbnail}
        alt={item.thumbnail}
        className="w-[40px] h-[40px] rounded-md"
      />
      <span>{item.name}</span>
    </div>
  );

  const amountTemplate = (item) => (
    <div className="flex items-center gap-[5px]">
      <span>x</span>
      <span>{item.pivot?.quantity}</span>
    </div>
  );

  const priceTemplate = (item) => (
      <span>{formatCurrency(item.price?.base_price-0)}</span>
  );

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <h5>Products in order</h5>
        <DataTable value={data.products}>
          <Column
            field="name"
            header="Product"
            sortable
            body={productTemplate}
          ></Column>
          <Column
            field="amount"
            header="Amount"
            sortable
            body={amountTemplate}
          ></Column>
          <Column
            field="price?.base_price"
            header="Price"
            sortable
            body={priceTemplate}
          ></Column>
        </DataTable>
      </div>
    );
  };

  const submitOrder = (id) => {
    axiosClient.post(`/order/submit/${id}`).then((data) => {
      setProducts(data.data.data);
    });
  };

  const actionTemplate = (item) => (
    <div className="flex items-center justify-center">
      {item.status === "Pending" ? (
        <Button variant="contained" onClick={() => submitOrder(item.id)}>
          Submit
        </Button>
      ) : (
        <IconButton>
          <TickIcon size={24} primary={"#333"} />
        </IconButton>
      )}
    </div>
  );

  const statusBody = (item) => {
    return (
      <>
        {item.status === "Pending" && (
          <span className="badge badge__pending">{item.status}</span>
        )}
        {item.status === "Refund" && (
          <span className="badge badge__refund">{item.status}</span>
        )}
        {item.status === "Cancelled" && (
          <span className="badge badge__cancelled">{item.status}</span>
        )}
        {item.status === "Completed" && (
          <span className="badge badge__completed">{item.status}</span>
        )}
        {item.status === "Delivering" && (
          <span className="badge badge__delivering">{item.status}</span>
        )}
      </>
    );
  };

  const totalPriceBody = (item) => <div>{formatCurrency(item.total)}</div>;

  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Order</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/dashboard"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Order</span>
        </div>
      </section>
      {loading ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <section className="w-full p-[20px] card">
          <Toast ref={toast} />
          <DataTable
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            value={products}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            header={header}
            tableStyle={{ minWidth: "60rem" }}
          >
            <Column expander={allowExpansion} style={{ width: "5rem" }} />
            <Column
              field="id"
              header="Id"
              sortable
              style={{ width: 0, paddingRight: "50px" }}
            />
            <Column
              field="user?.name"
              header="User"
              sortable
              body={userTemplate}
            />
            <Column
              field="status"
              header="Status"
              style={{ textAlign: "end", width: 0, paddingLeft: "50px" }}
              body={statusBody}
            />
            <Column
              field="total"
              header="Price"
              sortable
              style={{ textAlign: "end", width: 0, paddingLeft: "50px" }}
              body={totalPriceBody}
            />
            <Column
              field="date_added"
              header="Created date"
              sortable
              style={{ textAlign: "end", width: 180 }}
            />
            <Column
              field="user.address"
              header="Address"
              sortable
              style={{ textAlign: "end", maxWidth: 200 }}
            />
            <Column
              style={{ textAlign: "center", width: 0 }}
              body={actionTemplate}
            />
          </DataTable>
        </section>
      )}
    </>
  );
}

export default OrderPage;
