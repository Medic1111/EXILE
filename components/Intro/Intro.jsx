import Image from "next/image";
import MB from "../../public/mb.png";
import Pierce from "../../public/pierce.png";
import Art from "../../public/art.png";
import Logo from "../../public/logo.png";

const Intro = () => {
  return (
    <>
      <div className=" lg:min-h-screen w-full  flex flex-col justify-between">
        <h1 className=" sm:tracking-wider px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          LOCATED IN THE CITY OF <br /> MIAMI BEACH
        </h1>
        <Image
          className="rounded-l  w-full bg-lime-400 object-cover sm:h-[50vh] lg:h-[60vh] "
          src={MB}
        />
      </div>
      <div className="lg:min-h-screen w-full flex flex-col justify-between">
        <h1 className="sm:tracking-wider text-end px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          BRINGING YOU <br /> CREATIVE,
        </h1>
        <Image
          className="rounded-l  w-full bg-rose-500 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={Pierce}
        />
      </div>
      <div className="sm:tracking-wider lg:min-h-screen w-full  flex flex-col justify-between">
        <h1 className=" px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          QUALITY, AND AUTHENTIC <br /> BODY ART
        </h1>

        <Image
          className="rounded-l w-full bg-blue-500 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={Art}
        />
      </div>
      <div className="py-10 lg:py-0 min-h-screen w-full flex items-center justify-center">
        <Image
          className="rounded-l w-full md:w-1/3 object-cover bg-slate-950  sm:h-[50vh]  lg:h-auto"
          src={Logo}
        />
      </div>
    </>
  );
};

export default Intro;
