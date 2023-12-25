import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

function AdminLayout() {
  const [side, setSide] = useState(true);
  return (
    <>
      <Header side={side} setSide={setSide} />
      <Sidebar side={side} />
      <main
        className={`absolute top-[60px] duration-300 py-[30px] px-[60px] flex flex-col gap-[30px] ${
          side ? "left-[270px] w-[calc(100%-270px)]" : "left-0 w-full"
        }`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
