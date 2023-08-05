import { common } from "../../components/common_styles/common";
import Contact from "../../components/Contact/Contact";
import Intro from "../../components/Intro/Intro";
import DropDown from "../../components/DropDown/DropDown";
import Hours from "../../components/Contact/Hours/Hours";

const Main = () => {
  return (
    <main className={`${common.pageContainer} `}>
      <Intro />
      <DropDown />
      <Hours />
      <Contact />
    </main>
  );
};

export default Main;
