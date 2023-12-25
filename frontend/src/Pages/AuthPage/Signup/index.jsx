/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";
import { useStateContext } from "~/context/ApiContext";
import { createRef } from "react";
import { axiosClient } from "~/axios/AxiosClient";

function SignupPage() {
  const navigate = useNavigate();
  const { setNotification, notification, setToken, setUser } =
    useStateContext();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    };
    axiosClient
      .post("/signup", payload)
      .then((data) => {
        setUser(data.data.user);
        console.log(data.data);
        setToken(data.data.token);
        navigate("/submit");
      })
      .catch((data) => {
        setNotification(data.response.data.message);
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
      <span className="text-[18px]">Enter your sign up details</span>
      <div className="flex flex-col gap-[10px]">
        <span>Enter email address</span>
        <input
          ref={emailRef}
          type="text"
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
      </div>
      <div className="flex flex-col gap-[10px] mt-[-20px]">
        <span>Confirm password</span>
        <input
          ref={passwordConfirmRef}
          type="password"
          className="border h-[50px] border-green-dark rounded-full rounded-br-none px-[20px]"
        />
      </div>
      <span className="-my-[20px] w-full flex justify-center items-center text-red/70">
        {notification}
      </span>
      <div className="w-full flex flex-col gap-[10px]">
        <ButtonStyle
          variant={"contained"}
          width={"100%"}
          height={"50px"}
          fontSize={"18px"}
          type={"submit"}
        >
          Sign up
        </ButtonStyle>
        <span className="text-green-main-dark flex items-center gap-[5px]">
          <span>Already have account?</span>
          <Link to={"/login"} className="font-[600] text-green/70">
            Sign in
          </Link>
        </span>
      </div>
    </form>
  );
}

export default SignupPage;
