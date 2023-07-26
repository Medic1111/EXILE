import { common } from "../../components/common_styles/common";
import Contact from "../../components/Contact/Contact";
import Intro from "../../components/Intro/Intro";
import DropDown from "../../components/DropDown/DropDown";

const Main = () => {
  return (
    <main className={`${common.pageContainer} `}>
      <Intro />
      <DropDown />

      <Contact />
    </main>
  );
};

export default Main;
