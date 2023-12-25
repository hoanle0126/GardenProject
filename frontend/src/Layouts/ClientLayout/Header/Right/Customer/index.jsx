/* eslint-disable react/prop-types */
import AvatarCustomer from "./Avatar";
import CartCommerce from "./Cart";
import SearchCommerce from "./Search";

const CustomerRightCommerce = ({ navigate }) => {
  return (
    <div className="flex items-center gap-[20px]">
      <SearchCommerce />
      <CartCommerce navigate={navigate} />
      <AvatarCustomer />
    </div>
  );
};

export default CustomerRightCommerce;
