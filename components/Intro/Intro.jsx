import Image from "next/image";
import Z from "../../public/z.png";
import Tiger from "../../public/tiger.jpg";
import Logo from "../../public/logobanner.png";
// WALLPAPERACCESS
const Intro = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <h1 className="uppercase  tracking-wide  px-2 py-10 text-slate-50 text-5xl  md:text-8xl">
          Bringing you <br />
          Creative,
        </h1>
        <div className=" w-full flex  min-h-[28vh] items-center justify-center  bg-amber-500  sm:h-[50vh] lg:h-[40vh]">
          <Image
            className=" object-cover   w-full sm:min-h-auto md:w-2/3   lg:3/4   "
            src={Logo}
          />
        </div>
      </div>
      <div className="  w-full text-end flex flex-col justify-between">
        <h1 className=" tracking-wide px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          AND QUALITY <br /> BODY <span className="text-rose-600">ART</span>
        </h1>

        <Image
          className="w-full  bg-rose-600 object-cover sm:h-[50vh] lg:h-[40vh]"
          src={Tiger}
        />
      </div>
      <div className="bg-slate-950 border-b-2 border-solid border-slate-50 h-44 md:h-64 text-slate-50 px-1 text-5xl lg:text-8xl flex items-center justify-start">
        WALK-IN
      </div>
    </>
  );
};

export default Intro;
