import { useState } from "react";
import X from "../../public/cass.png";
import Y from "../../public/jorian3.png";
import Profile from "../Profile/Profile";
import Shop from "../Shop/Shop";
import DropTab from "../DropTab/DropTab";
import { Slide } from "react-awesome-reveal";

const DropDown = () => {
  const [showShop, setShowShop] = useState(false);
  const [showTattoo, setShowTattoo] = useState(false);
  const [showPiercing, setShowPiercing] = useState(false);

  return (
    <ul className="list-none bg-slate-50">
      {/* SHOP */}
      <Slide direction="left" triggerOnce>
        <DropTab
          id="_SHOP"
          state={showShop}
          stateFoo={setShowShop}
          title={"STUDIO"}
        />
      </Slide>
      {showShop && <Shop />}
      {/* TATTO */}
      <Slide direction="right" triggerOnce>
        <DropTab
          id="_TATTOO"
          state={showTattoo}
          stateFoo={setShowTattoo}
          title={"cass"}
        />
      </Slide>

      {showTattoo && (
        <Profile
          title={"TATTOO ARTIST"}
          exp={2018}
          src={X}
          portfolio={"cass"}
        />
      )}
      {/* PIERCING */}
      <Slide direction="left" triggerOnce>
        <DropTab
          id="_PIERCE"
          state={showPiercing}
          stateFoo={setShowPiercing}
          title={"jorian"}
        />
      </Slide>
      {showPiercing && (
        <Profile
          title={"body piercer"}
          src={Y}
          exp={1998}
          portfolio={"jorian"}
        />
      )}
    </ul>
  );
};

export default DropDown;
