import { useState } from "react";
import X from "../../public/cass.png";
import Y from "../../public/jorian3.png";
import Profile from "../Profile/Profile";
import Shop from "../Shop/Shop";
import DropTab from "../DropTab/DropTab";

const DropDown = () => {
  const [showShop, setShowShop] = useState(false);
  const [showTattoo, setShowTattoo] = useState(false);
  const [showPiercing, setShowPiercing] = useState(false);

  return (
    <ul className="list-none bg-slate-50">
      {/* SHOP */}
      <DropTab
        id="_SHOP"
        state={showShop}
        stateFoo={setShowShop}
        title={"STUDIO"}
      />
      {showShop && <Shop />}
      {/* TATTO */}
      <DropTab
        id="_TATTOO"
        state={showTattoo}
        stateFoo={setShowTattoo}
        title={"cass"}
      />

      {showTattoo && (
        <Profile
          title={"TATTOO ARTIST"}
          exp={2018}
          src={X}
          portfolio={"cass"}
        />
      )}
      {/* PIERCING */}
      <DropTab
        id="_PIERCE"
        state={showPiercing}
        stateFoo={setShowPiercing}
        title={"jorian"}
      />
      {showPiercing && (
        <Profile
          title={"body piercer"}
          src={Y}
          exp={1998}
          portfolio={"jorian"}
        />
      )}
      <div className="px-5 flex gap-5 flex-wrap justify-between items-center font-marker   bg-slate-50 border-solid border-b-4  border-[#0d1322]  w-full text-end   text-[#0d1322] text-[1em] sm:text-xl  md:text-4xl md:text-5xl xl:text-7xl  min-h-[18vh] sm:min-h-[25vh] ">
        <p className="   text-rose-600">Sun</p>
        <p className=" text-rose-600">Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>2-9</p>
      </div>
    </ul>
  );
};

export default DropDown;
