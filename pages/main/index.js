import Contact from "../../components/Contact/Contact";
import { common } from "../../components/common_styles/common";

const Main = () => {
  return (
    <main className={common.pageContainer}>
      <div className=" lg:min-h-screen w-full  flex flex-col justify-between">
        <h1 className=" px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          LOCATED IN THE CITY OF <br /> MIAMI BEACH
        </h1>
        <img
          className="rounded-l  w-full bg-rose-400 object-cover sm:h-[50vh] lg:h-[60vh] "
          src="./mb.png"
        />
      </div>
      <div className="lg:min-h-screen w-full lg:py-10 flex flex-col justify-between">
        <h1 className=" text-end px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          READY TO BRING <br /> YOU CREATIVE,
        </h1>
        <img
          className="rounded-l  w-full bg-amber-400 object-cover sm:h-[50vh] lg:h-[60vh]"
          src="./pierce.png"
        />
      </div>
      <div className="lg:min-h-screen w-full lg:py-10 flex flex-col justify-between">
        <h1 className=" px-2 py-10 text-slate-50 text-5xl md:text-8xl">
          QUALITY AND AUTHENTIC <br /> BODY ART
        </h1>

        <img
          className="rounded-l w-full bg-blue-500 object-cover sm:h-[50vh] lg:h-[60vh]"
          src="./art.png"
        />
      </div>
      <div className="py-10 lg:py-0 lg:min-h-screen w-full flex items-center justify-center">
        <img
          className="rounded-l w-full md:w-1/3 object-cover bg-slate-950  sm:h-[50vh]  lg:h-auto"
          src="./logo.png"
        />
      </div>

      <Contact />
    </main>
  );
};

export default Main;
