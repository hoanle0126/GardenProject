import { Pagination } from "@mui/material";

function BlogCommercePage() {
  return (
    <main className="pt-[90px] px-[120px]  pb-[60px] flex flex-col gap-[60px]">
      <section className="flex gap-[30px]">
        <div className="h-[400px] w-[800px] flex gap-[20px]">
          <img src="" alt="" className="w-[400px] h-[400px]" />
          <div className="py-[20px] flex flex-col justify-between flex-1">
            <span className="text-[28px] line-clamp-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </span>
            <span className="text-gray-500 line-clamp-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </span>
            <span className="text-green/70">
              <span>280 Views</span>
            </span>
          </div>
        </div>
        <div className="flex-1 h-[400px] flex flex-col justify-between gap-[20px]">
          <div className="w-full h-[120px] flex">
            <img src="" alt="" className="w-[120px] h-[120px]" />
            <div className="h-[120px] flex-1 flex flex-col justify-center p-[10px]">
              <span className="text-[18px] line-clamp-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </span>
              <span className="text-gray-500 line-clamp-2 text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </span>
              <span className="text-green/70 text-[14px]">
                <span>280 Views</span>
              </span>
            </div>
          </div>
          <div className="w-full h-[120px] flex">
            <img src="" alt="" className="w-[120px] h-[120px]" />
            <div className="h-[120px] flex-1 flex flex-col justify-center p-[10px]">
              <span className="text-[18px] line-clamp-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </span>
              <span className="text-gray-500 line-clamp-2 text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </span>
              <span className="text-green/70 text-[14px]">
                <span>280 Views</span>
              </span>
            </div>
          </div>
          <div className="w-full h-[120px] flex">
            <img src="" alt="" className="w-[120px] h-[120px]" />
            <div className="h-[120px] flex-1 flex flex-col justify-center p-[10px]">
              <span className="text-[18px] line-clamp-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </span>
              <span className="text-gray-500 line-clamp-2 text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </span>
              <span className="text-green/70 text-[14px]">
                <span>280 Views</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-[30px]">
        <span className="text-[21px] font-[600]">Blog</span>
        <div className="w-full grid grid-cols-4 gap-[30px]">
          {[1,1,1,1,1,1].map((index) => (
            <div
              key={index}
              className="h-[400px] border rounded-2xl p-[20px] flex flex-col gap-[20px]"
            >
              <img src="" alt="" className="w-full h-[200px]" />
              <div className="flex-1 flex-col flex justify-between">
                <span className="text-[18px] line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </span>
                <span className="text-gray-500 line-clamp-2 text-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen
                  book.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </span>
                <span className="text-green/70 text-[14px]">
                  <span>280 Views</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex justify-end items-center">
        <Pagination/>
      </section>
    </main>
  );
}

export default BlogCommercePage;
