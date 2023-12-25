import { Avatar, Menu, MenuItem, alpha } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileIcon from "icons/profile";
import GearIcon from "icons/gear";
import LogoutIcon from "icons/logout";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "~/store/Auth/action";
import { useStateContext } from "~/context/ApiContext";

const AvatarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { setRouter } = useStateContext();
  const { auth } = useSelector((store) => store);
  const user = auth.user;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(null);
  }, [location.pathname]);

  const logout = () => {
    dispatch(logoutUser(navigate, setRouter));
  };

  return (
    <>
      <Avatar
        src={user?.avatar}
        onClick={handleClick}
        className="cursor-pointer"
      />
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex items-center flex-col justify-center px-[20px] pb-[10px] border-b min-w-[150px]">
          <span className="text-[18px]">{user?.name}</span>
          <span className="text-[14px] text-gray-500">{user?.role}</span>
        </div>
        <MenuItem onClick={() => navigate("/profile")}>
          <div className="flex items-center gap-[10px]">
            <ProfileIcon size={16} primary={"#333"} />
            <span>Profile</span>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className="flex items-center gap-[10px]">
            <GearIcon
              size={16}
              primary={alpha("#000", 0.7)}
              secondary={alpha("#000", 0.9)}
            />
            Setting
          </div>
        </MenuItem>
        <MenuItem onClick={logout}>
          <div className="flex items-center gap-[10px]">
            <LogoutIcon
              size={16}
              primary={alpha("#000", 0.7)}
              secondary={alpha("#000", 0.9)}
            />
            Logout
          </div>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AvatarAdmin;
