/* eslint-disable react/prop-types */
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import SortIcon from "~/assets/icons/sort";
import CloseIcon from "~/assets/icons/close";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";

const Sort = ({filter,setFilter}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full h-[60px] border-b flex items-center px-[60px] py-[15px] gap-[10px]">
      <ButtonStyle
        variant={"contained"}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<SortIcon size={14} color={"#fff"} />}
      >
        Sort
      </ButtonStyle>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => setFilter({ ...filter, sort: "Decrease By Price" })}
          sx={{ backgroundColor: filter.sort === "Decrease By Price" && "#f5f5f5" }}
        >
          Decrease By Price
        </MenuItem>
        <MenuItem
          onClick={() => setFilter({ ...filter, sort: "Increase By Price" })}
          sx={{ backgroundColor: filter.sort === "Increase By Price" && "#f5f5f5" }}
        >
          Increase By Price
        </MenuItem>
        <MenuItem
          onClick={() => setFilter({ ...filter, sort: "Latest" })}
          sx={{ backgroundColor: filter.sort === "Latest" && "#f5f5f5" }}
        >
          Latest
        </MenuItem>
      </Menu>
      <div className="border h-[40px] pl-[15px] pr-[5px] rounded-lg flex items-center gap-[0px] text-green/70 border-green/70 cursor-default">
        <span>
          {filter.sort}
          <IconButton onClick={() => setFilter({ ...filter, sort: "Default" })}>
            <CloseIcon size={14} color={ColorContext.palette.primary.main} />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default Sort;
