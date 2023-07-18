import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import Image from "next/image";
import Tat from "../../../public/z.png";
const Portfolio = () => {
  return (
    <section class="overflow-auto grid p-5 lg:p-10 min-h-screen grid-cols-2 sm:grid-cols-4   lg:grid-cols-5 gap-5 wrap bg-slate-50">
      <div class=" border-solid border-2 border-[#0d1322]">
        <Image className="w-full h-full object-cover" src={Tat} />
      </div>
      <div class="text-2xl sm:text-3xl md:text-5xl  items-center justify-center border-solid border-2 border-[#0d1322]">
        J
      </div>

      <div class="border-solid border-2 border-[#0d1322] col-span-2 bg-[#0d1322]">
        <Image className="w-full h-full object-cover" src={Tat} />
      </div>
      <div class="col-span-2 row-span-2 bg-[#0d1322] border-solid border-2 border-[#0d1322] ">
        <Image className="w-full h-full object-cover" src={Tat} />
      </div>

      <div class="border-solid border-2 border-[#0d1322] col-span-1 text-2xl sm:text-3xl md:text-5xl  items-center justify-center">
        O
      </div>
      <div class="border-solid border-2 border-[#0d1322] col-span-1 ">
        <span className="text-2xl sm:text-3xl md:text-5xl ">R</span>
        <span className="text-2xl sm:text-3xl md:text-5xl  ">I</span>
      </div>
      <div class="items-center  cursor-pointer justify-between flex text-2xl sm:text-3xl md:text-5xl  border-solid border-2 border-[#0d1322] flex  flex-col row-span-1">
        <AiOutlineInstagram />
        <AiOutlineFacebook />
      </div>
      <div class="col-span-1 "></div>
      <div class=" border-solid border-2 border-[#0d1322] col-span-1 text-2xl sm:text-3xl md:text-5xl  ">
        <Image className="w-full h-full object-cover" src={Tat} />
      </div>
      <div class="border-solid border-2 border-[#0d1322] col-span-1 text-2xl sm:text-3xl md:text-5xl  ">
        AN
      </div>
    </section>
  );
};

export default Portfolio;
