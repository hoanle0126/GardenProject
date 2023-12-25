import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GuestRightCommerce = () => {
  const navigate = useNavigate();

  return (
    <div className="flex  items-center gap-[10px]">
      <Button
        variant="outlined"
        sx={{ textTransform: "none" }}
        onClick={() => navigate("/signup")}
      >
        Sign up
      </Button>
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={() => navigate("/login")}
      >
        Sign in
      </Button>
    </div>
  );
};

export default GuestRightCommerce;
