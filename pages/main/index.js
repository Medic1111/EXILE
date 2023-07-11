import Contact from "../../components/Contact/Contact";
import Intro from "../../components/Intro/Intro";
import { common } from "../../components/common_styles/common";

const Main = () => {
  return (
    <main className={`${common.pageContainer} `}>
      <Intro />
      <Contact />
    </main>
  );
};

export default Main;
