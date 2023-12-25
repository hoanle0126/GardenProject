/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";
import { Button } from "@mui/material";
import { createRef } from "react";
import { axiosClient } from "~/axios/AxiosClient";
import { useStateContext } from "~/context/ApiContext";

function SubmitEmail() {
  const navigate = useNavigate();
  const otpRef = createRef();
  const { setUser, setToken,user } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      otp: otpRef.current.value,
    };
    axiosClient.post("/verify", payload).then((data) => {
      setUser(data.data.user);
      setToken(data.data.token);
      navigate("/detail")
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 h-screen flex justify-center px-[100px] pr-[200px] flex-col gap-[40px] text-green-main-dark"
    >
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
        Enter verification code to submit email {user.role_id}
      </span>
      <div className="flex flex-col gap-[10px]">
        <span>Enter code</span>
        <div className="w-full relative h-[50px]">
          <input
            ref={otpRef}
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
          <ButtonStyle
            type={"submit"}
            variant={"contained"}
            height={"50px"}
            fontSize={"18px"}
          >
            Submit
          </ButtonStyle>
        </div>
      </div>
    </form>
  );
}

export default SubmitEmail;
