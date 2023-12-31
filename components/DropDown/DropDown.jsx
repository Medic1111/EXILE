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
    </ul>
  );
};

export default DropDown;
