import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import HeroImg from "../../public/mach.png";

const Hero = () => {
  return (
    <section
      className={
        "h-screen overflow-auto w-full flex flex-col lg:flex-row start-center justify-between md:justify-start gap-10 px-5 py-10"
      }
    >
      <div>
        <h1 className="font-normal uppercase mb-10 text-slate-50 text-6xl lg:text-8xl font-bold ">
          Exile Tattoo and Piercing
        </h1>
        <Image
          alt="Shows a man with tattoo on his back and arms"
          className=" w-full bg-rose-600 object-cover sm:h-[50vh] lg:h-[60vh]"
          src={HeroImg}
        />
      </div>
      <Link
        aria-label="link to enter the application"
        href={"/main"}
        className="h-16 cursor-pointer flex items-center justify-center  text-4xl border-2 border-solid border-slate-50 text-slate-50 lg:w-1/3 lg:mt-5 hover:bg-slate-50 hover:text-slate-950 mb-14 md:mb-0 "
      >
        <AiOutlineArrowRight />
      </Link>
    </section>
  );
};

export default Hero;
