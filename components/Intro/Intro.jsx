import Image from "next/image";
import Z from "../../public/z.png";
import Tiger from "../../public/tiger.jpg";

// WALLPAPERACCESS
const Intro = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <h1 className="uppercase  tracking-wide  px-2 py-10 text-slate-50 text-5xl  md:text-8xl">
          Bringing you <br />
          Creative,
        </h1>
        <Image
          className=" w-full  bg-amber-500  object-cover  sm:h-[50vh] lg:h-[40vh]"
          src={Z}
        />
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
