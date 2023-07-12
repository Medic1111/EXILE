import Image from "next/image";
import Pierce from "../../public/pierce.png";
import Art from "../../public/art.png";

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
          AND QUALITY <br /> BODY ART
        </h1>

        <Image
          className=" w-full bg-amber-400 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={Art}
        />
      </div>
    </>
  );
};

export default Intro;
