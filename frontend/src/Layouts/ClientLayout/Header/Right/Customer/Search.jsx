/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import SearchIcon from "icons/search";
import { useEffect, useRef, useState } from "react";
import ColorContext from "~/context/ColorContext";
import { axiosClient } from "~/axios/AxiosClient";
import { Link } from "react-router-dom";

const SearchCommerce = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [products, setProducts] = useState([]);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const openSearchInput = () => {
    setOpenSearch(!openSearch);
    setSearchValue("");
  };

  useEffect(() => {
    console.log(searchValue);
    searchValue === "" ? setOpen(false) : setOpen(true);
  }, [searchValue]);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const getProducts = () => {
    axiosClient.post("products/search", { name: searchValue }).then((data) => {
      setProducts(data.data.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, [searchValue]);

  return (
    <div
      className={`h-[50px]  flex justify-end items-center duration-300 ${
        !openSearch ? " w-[50px]" : "w-[300px]"
      }`}
    >
      <IconButton
        aria-label="delete"
        color="secondary"
        onClick={openSearchInput}
        sx={{ position: "absolute" }}
      >
        <SearchIcon
          primary={ColorContext.palette.primary.main}
          secondary={ColorContext.palette.secondary.main}
          size={"30px"}
        />
      </IconButton>
      <input
        type="text"
        className={`${
          !openSearch
            ? "w-[45px] bg-transparent border-transparent"
            : " w-[300px] pl-[15px] pr-[45px] bg-orange-primary/10 border-orange-primary/30"
        } duration-[320ms] h-[45px] outline-none rounded-full border `}
        value={searchValue}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ width: 300, maxHeight: 320, overflow: "hidden" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {products.map((product) => (
                    <Link
                      to={`/shop/${product.id}`}
                      key={product.id}
                      className="h-[60px] px-[10px] py-[5px] hover:bg-orange-primary/20 cursor-pointer flex justify-between gap-[10px] w-full"
                    >
                      <div className="flex items-center gap-[10px]">
                        <img
                          src={product.thumbnail}
                          alt={product.thumbnail}
                          className="w-[50px] h-[50px]"
                        />
                        <span>{product.name}</span>
                      </div>
                      <div className="flex items-end">
                        ${product.price?.base_price}
                      </div>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default SearchCommerce;
