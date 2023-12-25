import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CenterCommerce from "./Center";
import LeftCommerce from "./Left";
import RightCommerce from "./Right";

function CommerceHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [header, setHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeader(false);
      } else {
        setHeader(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`duration-100 flex justify-between px-[120px] h-[60px] top-0 left-0 items-center w-full fixed z-[1000] border-b ${
        location.pathname !== "/" || !header
          ? "border-gray-200  bg-[#f9f9f9]"
          : "border-transparent"
      }`}
    >
      <LeftCommerce />
      <CenterCommerce />
      <RightCommerce navigate={navigate} />
    </header>
  );
}

export default CommerceHeader;
