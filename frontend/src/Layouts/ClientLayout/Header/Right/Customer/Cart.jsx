/* eslint-disable react/prop-types */
import { Badge, IconButton } from "@mui/material";
import CartIcon from "icons/cart";
import ColorContext from "~/context/ColorContext";
import { useStateContext } from "~/context/ApiContext";
import { useNavigate } from "react-router-dom";

const CartCommerce = () => {
  const { user } = useStateContext();
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="delete"
      color="primary"
      onClick={() => navigate("/cart")}
      sx={{ marginRight: "10px" }}
    >
      <Badge badgeContent={user?.cart?.product.length} color="primary">
        <CartIcon
          primary={ColorContext.palette.primary.main}
          secondary={ColorContext.palette.secondary.main}
          size={"30px"}
        />
      </Badge>
    </IconButton>
  );
};

export default CartCommerce;
