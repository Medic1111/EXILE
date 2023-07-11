import Image from "next/image";
import Pierce from "../../public/pierce.png";
import Art from "../../public/art.png";
import Logo from "../../public/logo.png";

const Intro = () => {
  return (
    <>
      <div className="lg:min-h-screen w-full flex flex-col justify-between">
        <h1 className="sm:tracking-wider  px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          BRINGING YOU <br /> CREATIVE,
        </h1>
        <Image
          className="  w-full bg-rose-500 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={Pierce}
        />
      </div>
      <div className="sm:tracking-wider lg:min-h-screen w-full  flex flex-col justify-between">
        <h1 className="text-end px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          QUALITY, AND AUTHENTIC <br /> BODY ART
        </h1>

        <Image
          className=" w-full bg-amber-400 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={Art}
        />
      </div>

      {/* TEAM */}
      <p className="bg-slate-950 border-solid border-b-2  border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950">
        THE SHOP
      </p>
      <p className="bg-slate-950 border-solid border-b-2 border-slate-50 text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl  cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950">
        CASSANDRA
      </p>
      <p className="bg-slate-950 border-solid border-b-2 border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl  cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950">
        JORIAN
      </p>
    </>
  );
};

export default Intro;
