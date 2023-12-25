import { Avatar } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Overview from "./Overview";
import Security from "./Security";
import Activity from "./Activity";
import Setting from "./Setting";
import { useStateContext } from "~/context/ApiContext";
import { AccountCircle, Email, LocationOn } from "@mui/icons-material";

function AdminProfile() {
  const [tab, setTab] = useState("Overview");
  const { user, setUser } = useStateContext();

  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Profile</span>
        <div className="header__top--breadcrumbs">
          <Link to={"/"} className="text-gray-1 font-[600]">
            Home
          </Link>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Profile</span>
        </div>
      </section>
      <section className="w-full card px-[20px] flex gap-[30px] flex-col">
        <div className="flex gap-[20px] py-[20px]">
          <Avatar
            src={user.avatar}
            variant="rounded"
            sx={{ width: 150, height: 150 }}
          />
          <div className="flex flex-col justify-between pb-[10px]">
            <div className="flex flex-col">
              <span className="text-[24px] font-[600]">{user.name}</span>
              <span className="text-[14px] text-gray-500 flex gap-[10px] items-center font-[600]">
                <span className="flex items-center gap-[5px]">
                  <AccountCircle sx={{ fontSize: 18 }} />
                  <span>{user.role.name}</span>
                </span>
                <span className="flex items-center gap-[5px]">
                  <LocationOn sx={{ fontSize: 18 }} />
                  {user.address}
                </span>
                <span className="flex items-center gap-[5px]">
                  <Email sx={{ fontSize: 18 }} />
                  {user.email}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="h-[50px] w-[100px] border rounded border-dashed"></div>
            </div>
          </div>
        </div>
        <div className="h-[40px] flex items-center gap-[20px]">
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Overview"
                ? "text-green/70 border-green/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Overview")}
          >
            Overview
          </span>
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Security"
                ? "text-green/70 border-green/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Security")}
          >
            Security
          </span>
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Activity"
                ? "text-green/70 border-green/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Activity")}
          >
            Activity
          </span>
          <span
            className={`text-[18px] font-[600] h-full flex-center border-b-4 cursor-pointer ${
              tab === "Setting"
                ? "text-green/70 border-green/70"
                : "text-gray-500 border-transparent"
            }`}
            onClick={() => setTab("Setting")}
          >
            Setting
          </span>
        </div>
      </section>
      {tab === "Overview" && <Overview user={user} setUser={setUser} />}
      {tab === "Security" && <Security />}
      {tab === "Activity" && <Activity />}
      {tab === "Setting" && <Setting />}
    </>
  );
}

export default AdminProfile;
