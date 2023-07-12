import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const DropDown = () => {
  const [showShop, setShowShop] = useState(false);
  const [showTattoo, setShowTattoo] = useState(false);
  const [showPiercing, setShowPiercing] = useState(false);

  return (
    <ul className="list-none">
      <li
        onClick={() => setShowShop((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2  border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950"
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>THE SHOP</p>
      </li>
      {/* shop */}
      {showShop && (
        <li className="bg-slate-50 min-h-[85vh] border-solid border-b-2  border-slate-950">
          <p>SHOP</p>
        </li>
      )}
      {/* shop end */}
      <li
        onClick={() => setShowTattoo((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2 border-slate-50 text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl  cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950"
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>CASSANDRA</p>
      </li>
      {/* Tattoo */}
      {showTattoo && (
        <li className="bg-slate-50 min-h-[85vh] border-solid border-b-2  border-slate-950">
          <p>Tattoo</p>
        </li>
      )}
      {/* Tattoo end */}
      <li
        onClick={() => setShowPiercing((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2 border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl  cursor-pointer hover:bg-slate-50 hover:text-slate-950 hover:border-slate-950"
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>JORIAN</p>
      </li>
      {/* Piercing */}
      {showPiercing && (
        <li className="bg-slate-50 min-h-[85vh] border-solid border-b-2  border-slate-950">
          <p>Piercing</p>
        </li>
      )}
      {/* Piercing end */}
    </ul>
  );
};

export default DropDown;
