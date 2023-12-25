import { Avatar, Button } from "@mui/material";

function ChatPage() {
  return (
    <>
      <section className="header__top">
        <span className="header__top--header">Chat</span>
        <div className="header__top--breadcrumbs">
          <span className="text-gray-1 font-[600]">Home</span>
          <span className="text-gray-1 font-[600]">/</span>
          <span className=" font-[600] text-dark">Chat</span>
        </div>
      </section>
      <section className="w-full grid grid-cols-12 gap-[30px]">
        <div className="card col-span-4 p-[20px] flex flex-col gap-[20px]">
          <input
            type="text"
            name=""
            id=""
            className="outline-none bg-gray-200/70 w-full h-[40px] rounded-lg p-[10px]"
          />
          <div className="w-full h-[400px] overflow-y-scroll overflow-x-hidden flex flex-col gap-[15px]">
            {[1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((index) => (
              <div
                key={index}
                className="flex gap-[20px] items-center h-[40px] w-full"
              >
                <Avatar />
                <div className="flex flex-col">
                  <span className="text-[18px] line-clamp-1 font-[600]">
                    Hoan
                  </span>
                  <span className="text-[14px] line-clamp-1 w-[230px] text-gray-600">
                    HoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoanHoan
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="card col-span-8 flex flex-col justify-between">
            <div className="h-[70px] w-full border-b flex flex-col justify-center p-[20px]">
                <span className="text-[21px] font-[600]">Hoanf</span>
                <span className="text-[14px]">Online</span>
            </div>
            <div className="h-[80px] border flex items-center p-[20px] gap-[30px]">
                <input type="text" name="" id="" className="flex-1 outline-none bg-gray-200 h-[40px] rounded-md p-[10px]"/>
                <Button variant="contained" sx={{height:40}}>Send</Button>
            </div>
        </form>
      </section>
    </>
  );
}

export default ChatPage;
