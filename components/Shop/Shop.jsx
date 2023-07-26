import Image from "next/image";
import ShopPic from "../../public/shop.png";
import ShopPic2 from "../../public/shop2.png";
import ShopPic3 from "../../public/shop5.png";

const Shop = () => {
  return (
    <li
      data-testid="shop"
      className="bg-slate-50 min-h-[85vh] border-solid border-b-4 w-full h-full border-[#0d1322] py-10"
    >
      <section className="overflow-auto grid p-5 lg:p-10 min-h-screen grid-cols-2 sm:grid-cols-4   lg:grid-cols-5 gap-10 wrap bg-slate-50">
        <div className="flex items-center justify-center border-solid border-2 border-[#0d1322]  col-span-2">
          <p className="font-san  uppercase text-4xl">Miami Beach</p>
        </div>
        <div className="col-span-1 text-2xl sm:text-3xl md:text-5xl  items-center justify-center "></div>

        <div className="border-solid border-2 border-[#0d1322] col-span-2 max-h-[40vh]">
          <Image className="  h-full object-cover" src={ShopPic} />
        </div>
        <div className="col-span-2 row-span-2  border-solid border-2 border-[#0d1322] ">
          <Image className=" h-full object-cover" src={ShopPic2} />
        </div>
        <div className="border-solid border-2 border-[#0d1322] col-span-2 text-2xl sm:text-3xl md:text-5xl  items-center justify-center max-h-[40vh]">
          <Image className=" w-full h-full object-cover" src={ShopPic3} />
        </div>
        <div className="items-center  cursor-pointer justify-between flex text-2xl sm:text-3xl md:text-5xl   flex  flex-col row-span-1"></div>
        <div className="col-span-1 "></div>
        <div className="border-solid border-2 border-[#0d1322] col-span-1 text-2xl sm:text-3xl md:text-5xl  col-span-2">
          <video
            className=" object-cover w-full h-full "
            loop
            muted
            autoPlay
            defaultMuted
            playsinline
          >
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690383098/production_id_4124032_2160p_sh7cqo.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690383098/production_id_4124032_2160p_sh7cqo.mp4"
              }
              type="video/ogg"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
        </div>
      </section>
    </li>
  );
};

export default Shop;
