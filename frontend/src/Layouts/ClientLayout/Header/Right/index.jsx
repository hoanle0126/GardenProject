import { useStateContext } from "~/context/ApiContext";
import CustomerRightCommerce from "./Customer";
import GuestRightCommerce from "./Guest";

function RightCommerce() {
  const { token } = useStateContext();

  return <>{token ? <CustomerRightCommerce /> : <GuestRightCommerce />}</>;
}

export default RightCommerce;
