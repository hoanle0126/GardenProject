/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import RightAdmin from "./Right";

const Header = ({ side, setSide }) => {
  return (
    <header className="h-[60px] w-full flex items-center justify-between bg-white fixed top-0 shadow-md z-[1000] px-[20px]">
      <div className="flex h-full items-center">
        <LogoEvergreen
          className={"w-[50px]"}
          leaf={ColorContext.palette.primary.main}
        />
        <span className="text-[28px] font-[700] ">Garden</span>
      </div>
      <MenuIcon
        className="fixed left-[270px] cursor-pointer"
        sx={{ fontSize: "48px" }}
        color="primary"
        onClick={() => setSide(!side)}
      />
      <RightAdmin/>
    </header>
  );
};

export default Header;
