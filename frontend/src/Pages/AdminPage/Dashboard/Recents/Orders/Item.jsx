/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { axiosClient } from "~/axios/AxiosClient";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatCurrency } from "~/function/format";

const Item = ({ id }) => {
  const [order, setOrder] = useState();
  const getOrder = () => {
    axiosClient.get(`/categories/${id}`).then((data) => {
      setOrder(data.data.data.order);
      console.log(data.data.data.order);
    });
  };

  useEffect(() => {
    getOrder();
  }, [id]);

  const productTemplate = (item) => (
    <div className="flex gap-[5px] items-center">
      <img
        src={item?.thumbnail}
        alt=""
        className="w-[50px] h-[50px] rounded-md"
      />
      <span>{item?.name}</span>
    </div>
  );

  const priceTemplate = (item) => (
    <div>
      <span>{formatCurrency(item?.price.base_price - 0)}</span>
    </div>
  );

  return (
    <div className="w-full h-[200px]">
      <DataTable
        value={order&&order[0]?.product}
        scrollable
        scrollHeight="280px"
      >
        <Column field="name" header="Product" sortable body={productTemplate}/>
        <Column field="pivot.quantity" header="Quantity" sortable/>
        <Column field="price.base_price" header="Price" sortable body={priceTemplate}/>
      </DataTable>
    </div>
  );
};

export default Item;
