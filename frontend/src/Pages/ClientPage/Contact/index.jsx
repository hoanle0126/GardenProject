import { Button } from "@mui/material";

function ContactCommercePage() {
  return (
    <main className="pt-[90px] px-[120px]  pb-[60px] flex gap-[120px] h-[750px]">
      <section className="flex-1 flex flex-col  justify-between">
        <div className="flex flex-col">
          <span className="text-[21px] font-[600]">Contact Us</span>
          <span className="text-gray-500">
            Our teams would love to hear you
          </span>
      </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="name" className="text-[18px]">Name</label>
            <input type="text" id="name" className="w-full h-[40px] border rounded-md outline-none p-[10px]"/>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="email" className="text-[18px]">Email</label>
            <input type="text" id="email" className="w-full h-[40px] border rounded-md outline-none p-[10px]"/>
          </div>
          <div className="flex flex-col gap-[5px]">
            <label htmlFor="message" className="text-[18px]">Message</label>
            <textarea type="text" id="message" className="w-full border rounded-md outline-none h-[200px] p-[10px]"/>
          </div>
        </div>
        <Button fullWidth variant="contained">Submit</Button>
      </section>
      <section className="flex-1 h-full bg-contact bg-cover shadow rounded-2xl"></section>
    </main>
  );
}

export default ContactCommercePage;
