import Image from "next/image";
import Logo from "../../public/logo.png";
import Tat1 from "../../public/tat-2.png";
import Tat3 from "../../public/tat3.png";
import Tiger from "../../public/tiger.jpg";

// WALLPAPERACCESS
const Intro = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#0d1322",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/argyle.png")',
        }}
        class="overflow-auto grid p-5 lg:p-10 min-h-screen  grid-cols-2  sm:grid-rows-auto sm:grid-cols-4   lg:grid-cols-5 gap-5 wrap bg-[#0d1322] border-solid border-b-2 border-slate-50"
      >
        <div class="flex  items-center justify-center  border-solid border-2 border-[#0d1322] border-slate-50 bg-slate-50 ">
          <Image className="  w-full " src={Logo} />
        </div>
        <div class="p-1  text-2xl xl:text-4xl text-[#0d1322] text-slate-50  h-1/2 border-solid border-2 border-[#0d1322]  border-slate-50 text-[#0d1322] bg-[#0d1322]">
          EXILE
        </div>

        <div class="border-solid border-2 border-[#0d1322]  border-slate-50 h-full col-span-2 row-span-1  bg-[#0d1322]">
          <Image className="w-full h-full object-cover" src={Tiger} />
        </div>
        <div className="col-span-2 row-span-2 border-solid  bg-[#0d1322]  border-2 border-[#0d1322]  border-slate-50 text-[#0d1322] items-center  justify-between flex ">
          <Image className="w-full h-full object-cover" src={Tat1} />
        </div>

        <div class="col-span-1 p-1 border-solid border-2 border-[#0d1322]  border-slate-50  lg:h-1/2 items-start justify-start bg-[#0d1322]">
          <p className="  xl:text-4xl text-2xl text-[#0d1322] text-slate-50 ">
            TATOO
          </p>
        </div>
        <div class="p-1 text-2xl xl:text-4xl  border-solid flex flex-col border-2 border-[#0d1322]  border-slate-50 col-span-1 justify-end items-start  text-[#0d1322] text-slate-50 bg-[#0d1322]">
          AND
        </div>
        <div class="items-center  justify-between flex text-2xl    border-solid border-2 border-[#0d1322]  border-slate-50 flex text-[#0d1322] flex-col row-span-1 bg-slate-50 ">
          <Image className="w-full h-full object-cover" src={Tat3} />
        </div>
        <div class="col-span-1 "></div>
        <div class="col-span-1 text-2xl  xl:text-5xl  "></div>
        <div class="p-1 xl:text-4xl border-solid border-2 border-[#0d1322]  border-slate-50 col-span-1 text-2xl    flex items-end justify-end text-[#0d1322]  text-slate-50 bg-[#0d1322]">
          PIERCING
        </div>
      </section>
      <div className="bg-[#0d1322]  border-b-2 border-solid border-slate-50 h-44 md:h-64 text-slate-50 px-1 text-5xl lg:text-7xl flex items-center justify-start text-blue-50 pl-5">
        WALK-IN
      </div>
    </>
  );
};

export default Intro;
