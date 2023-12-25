import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[50%] h-full p-[40px]">
        <img
          src="https://img.freepik.com/free-photo/green-clover-with-four-leaves-dark-background_1340-26218.jpg"
          alt=""
          className="rounded-[48px] h-full rounded-br-none"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
