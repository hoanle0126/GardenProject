/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonStyle = ({
  children,
  variant,
  onClick,
  to,
  width,
  height,
  fontSize,
  endIcon,
  startIcon,
  type,
}) => {
  const navigate = useNavigate();

  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: "180px",
        borderBottomRightRadius: "0px",
        textTransform: "none",
        width: width,
        height: height,
        fontSize: fontSize,
      }}
      onClick={to ? () => navigate(to) : onClick}
      className="w-fit"
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      {children}
    </Button>
  );
};

export default ButtonStyle;
