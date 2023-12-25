/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LogoEvergreen from "~/assets/logo";
import ColorContext from "~/context/ColorContext";
import ButtonStyle from "~/Components/button";
import UploadIcon from "~/assets/icons/upload";
import { Avatar } from "@mui/material";
import { uploadToCloudinary } from "~/utils/uploadToCloudinary";
import { useStateContext } from "~/context/ApiContext";
import { axiosClient } from "~/axios/AxiosClient";

function DetailInfomation() {
  const navigate = useNavigate();
  const { user, setUser } = useStateContext();

  const handleSelectImage = async (e) => {
    const imgUrl = await uploadToCloudinary(e.target.files[0]);
    setUser({ ...user, avatar: imgUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient.post("/details", user).then((data) => {
      setUser(data.data.data);
      console.log(data.data.data);
      navigate("/");
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
      <span className="text-[18px]">Enter details infomation</span>
      <div className="flex flex-col gap-[10px]">
        <span>Avatar</span>
        <div className="flex">
          <div className="w-[100px]">
            <Avatar src={user.avatar} sx={{ width: 100, height: 100 }} />
          </div>
          <div className="flex-1 h-[100px] flex items-end">
            <label htmlFor="avt" className="cursor-pointer">
              <UploadIcon size={20} primary={"#000"} />
            </label>
            <input
              type="file"
              id="avt"
              onChange={handleSelectImage}
              className="hidden"
            />
          </div>
        </div>
      </div>
      <div className="-mt-[30px] flex gap-[10px] flex-col">
        <span>Full Name</span>
        <input
          value={user?.name}
          type="text"
          className="border w-full h-[50px] border-green-dark rounded-full rounded-br-none px-[20px] outline-green/70"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className="-mt-[30px] flex gap-[10px] flex-col">
        <span>Address</span>
        <input
          value={user?.address}
          type="text"
          className="border w-full h-[50px] border-green-dark rounded-full rounded-br-none px-[20px] outline-green/70"
          onChange={(e) => setUser({ ...user, address: e.target.value })}
        />
      </div>
      <div className="-mt-[30px] flex gap-[10px] flex-col">
        <span>Phone</span>
        <input
          value={user?.phone}
          type="text"
          className="border w-full h-[50px] border-green-dark rounded-full rounded-br-none px-[20px] outline-green/70"
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full flex items-center justify-end gap-[20px]">
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

export default DetailInfomation;
