import { Link, useLocation } from "react-router-dom";

const CenterCommerce = () => {
  const location = useLocation();
  return (
    <div className="flex gap-[20px] h-full text-[18px] items-center w-[30%] justify-between font-[600] text-green-main-dark">
      <Link
        to={"/"}
        className={`${location.pathname === "/" && "text-green/70"}`}
      >
        Home
      </Link>
      <Link
        to={"/shop"}
        className={`${location.pathname === "/shop" && "text-green/70"}`}
      >
        Shop
      </Link>
      <Link
        to={"/contact"}
        className={`${location.pathname === "/contact" && "text-green/70"}`}
      >
        Contact
      </Link>
    </div>
  );
};

export default CenterCommerce;
