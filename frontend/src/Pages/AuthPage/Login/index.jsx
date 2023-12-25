/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";
import { createRef } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "~/store/Auth/action";
import { useStateContext } from "~/context/ApiContext";

function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const { setRouter } = useStateContext();
  const dispatch = useDispatch();
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(loginUser(payload, navigate, setRouter));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 h-screen flex justify-center px-[100px] pr-[200px] flex-col gap-[40px] text-green-main-dark"
    >
      <Link className="flex items-center" to={"/"}>
        <LogoEvergreen
          className="w-[40px] h-[40px]"
          leaf={ColorContext.palette.primary.main}
        />
        <span className="text-[32px] font-[600] text-green-main-dark">
          Garden
        </span>
      </Link>
      <span className="text-[18px]">Enter your login details</span>
      <div className="flex flex-col gap-[10px]">
        <span>Enter email address</span>
        <input
          ref={emailRef}
          type="email"
          className="border h-[50px] border-green-dark rounded-full rounded-br-none px-[20px]"
        />
      </div>
      <div className="flex flex-col gap-[10px] mt-[-20px]">
        <span>Enter password</span>
        <input
          ref={passwordRef}
          type="password"
          className="border h-[50px] border-green-dark rounded-full rounded-br-none px-[20px]"
        />
        <Link to={"/forgot"} className="w-full text-right text-green/70">
          Forgot password?
        </Link>
      </div>
      <span className="-my-[20px] w-full flex justify-center items-center text-red/70">
        {auth.error}
      </span>
      <div className="w-full flex flex-col gap-[10px]">
        <ButtonStyle
          variant={"contained"}
          width={"100%"}
          height={"50px"}
          fontSize={"18px"}
          type={"submit"}
        >
          {auth.loading ? (
            <CircularProgress color="white" size={24} />
          ) : (
            <span>Login</span>
          )}
        </ButtonStyle>
        <span className="text-green-main-dark">
          Don't have account?{" "}
          <Link to={"/signup"} className="font-[600] text-green">
            Sign up
          </Link>
        </span>
      </div>
    </form>
  );
}

export default LoginPage;
