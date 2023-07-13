import { common } from "../../components/common_styles/common";
import Contact from "../../components/Contact/Contact";
import Intro from "../../components/Intro/Intro";
import DropDown from "../../components/DropDown/DropDown";

const Main = () => {
  return (
    <main className={`${common.pageContainer} `}>
      <Intro />
      <div className="bg-slate-950 border-b-2 border-solid border-slate-50 h-44 md:h-64 text-slate-50 px-1 text-5xl lg:text-8xl flex items-center justify-start">
        WALK-<span className="">IN</span>
      </div>
      <DropDown />
      <Contact />
    </main>
  );
};

export default Main;
