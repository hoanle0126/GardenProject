import CustomerRightCommerce from "./Customer";
import GuestRightCommerce from "./Guest";
import { useEffect } from "react";

function RightCommerce() {
  useEffect(() => {
    console.log(localStorage.getItem("item"));
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? (
        <CustomerRightCommerce />
      ) : (
        <GuestRightCommerce />
      )}
    </>
  );
}

export default RightCommerce;
