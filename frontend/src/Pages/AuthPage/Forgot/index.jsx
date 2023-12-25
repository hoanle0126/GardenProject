/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";
import { Button } from "@mui/material";

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 h-screen flex justify-center px-[100px] pr-[200px] flex-col gap-[40px] text-green-main-dark">
      <Link to={"/"} className="flex items-center">
        <LogoEvergreen
          className="w-[40px] h-[40px]"
          leaf={ColorContext.palette.primary.main}
        />
        <span className="text-[32px] font-[600] text-green-main-dark">
          Garden
        </span>
      </Link>
      <span className="text-[18px]">
        Enter verification code to get account
      </span>
      <div className="flex flex-col gap-[10px]">
        <span>Enter code</span>
        <div className="w-full relative h-[50px]">
          <input
            type="text"
            className="border absolute w-full h-[50px] border-green-dark rounded-full rounded-br-none px-[20px] outline-green/70"
          />
          <Button
            sx={{
              position: "absolute",
              right: 0,
              height: 50,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 0,
            }}
            variant="contained"
          >
            Send
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex items-center justify-end gap-[20px]">
          <ButtonStyle
            variant={"outlined"}
            height={"50px"}
            fontSize={"18px"}
            onClick={() => navigate(-1)}
          >
            Cancel
          </ButtonStyle>
          <ButtonStyle variant={"contained"} height={"50px"} fontSize={"18px"}>
            Submit
          </ButtonStyle>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
