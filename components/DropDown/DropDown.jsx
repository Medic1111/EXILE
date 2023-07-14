import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import X from "../../public/cass3.png";
import Y from "../../public/jorian3.png";
import Image from "next/image";

const DropDown = () => {
  const [showShop, setShowShop] = useState(false);
  const [showTattoo, setShowTattoo] = useState(false);
  const [showPiercing, setShowPiercing] = useState(false);

  return (
    <ul className="list-none ">
      <li
        data-testid="trigger-shop"
        onClick={() => setShowShop((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2  border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-950 hover:text-slate-50 border-slate-50"
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>THE SHOP</p>
      </li>
      {/* shop */}
      {showShop && (
        <li
          data-testid="shop"
          className="bg-slate-50 min-h-[85vh] border-solid border-b-2  border-slate-50"
        >
          {/* shop content */}
        </li>
      )}
      {/* shop end */}
      <li
        data-testid="trigger-tattoo"
        onClick={() => setShowTattoo((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2 border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-950 hover:text-slate-50 border-slate-50 "
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>CASSANDRA</p>
      </li>
      {/* Tattoo */}
      {showTattoo && (
        <li
          data-testid="tattoo"
          className="flex flex-col lg:flex-row justify-between bg-slate-50 h-96 w-screen h-auto border-solid border-b-2 mt-[-5px] border-slate-950 "
        >
          <div className="h-[100%] flex  flex-col justify-between w-full   ">
            <div className=" border-b-2 border-solid border-slate-950">
              <p className="h-[7.5vh] flex items-center justify-start text-4xl pl-1 lg:text-6xl border-b-2 border-solid border-slate-950">
                PROFILE:
              </p>
              <p className="h-[7.5vh] flex items-center justify-start text-4xl pl-1 lg:text-6xl">
                TATTOO ARTIST
              </p>
              <p className="h-[7.5vh] flex items-center justify-start text-4xl pl-1 lg:text-6xl border-t-2 border-solid  border-slate-950">
                <span className="text-rose-700">5</span> YEARS
              </p>
            </div>
            <div className="mb-10 h-full  flex items-start gap-5 justify-end flex-col ">
              <div className="w-full flex h-full flex-col items-end ">
                <button className="text-xl hover:bg-rose-600  cursor-pointer w-2/3  border-l-2  h-[7.5vh] border-solid border-slate-950">
                  PORTFOLIO
                </button>
                <button className="text-xl w-2/3 hover:bg-rose-600  border-2 h-[7.5vh] border-r-0 border-solid border-slate-950">
                  BOOK
                </button>
                <div className="lg:border-l-2 border-b-2  border-l-2 lg:border-t-0 lg:border-r-0 border-solid border-slate-950 h-[70%] w-[50%] lg:w-[40%] bg-amber-500 ">
                  <Image
                    className="h-full  min-h-[30vh] max-h-[40vh] lg:max-h-[45vh] object-cover"
                    src={X}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
      {/* Tattoo end */}
      <li
        data-testid="trigger-piercing"
        onClick={() => setShowPiercing((prev) => !prev)}
        className="flex items-center justify-between bg-slate-950 border-solid border-b-2  border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-950 hover:text-slate-50 border-slate-50"
      >
        <span>
          <AiOutlineDown />
        </span>
        <p>JORIAN</p>
      </li>
      {/* Piercing */}
      {showPiercing && (
        <li
          data-testid="piercing"
          className="bg-slate-50 h-auto border-solid border-b-2  border-slate-950"
        >
          <div className="h-[100%] flex  flex-col justify-between w-full   ">
            <div className="  border-b-2 border-solid border-slate-950 border-r-0 ">
              <p className="h-[7.5vh] flex items-center justify-start  text-4xl pl-1 lg:text-6xl border-b-2 border-solid border-slate-950">
                PROFILE:
              </p>
              <p className="h-[7.5vh] flex items-center justify-start  text-4xl pl-1 lg:text-6xl">
                BODY PIERCER
              </p>
              <p className="h-[7.5vh] flex items-center justify-start  text-4xl pl-1 lg:text-6xl border-t-2 border-solid   border-slate-950">
                <span className="text-rose-700">25</span> YEARS
              </p>
            </div>
            <div className="mb-10 h-full  flex items-start gap-5 justify-end flex-col ">
              <div className="w-full flex h-full flex-col items-end ">
                <button className="text-xl hover:bg-rose-600 cursor-pointer w-2/3  border-l-2  h-[7.5vh] border-solid border-slate-950">
                  PORTFOLIO
                </button>
                <button className="text-xl w-2/3 hover:bg-rose-600 border-2 h-[7.5vh] border-solid border-r-0 border-slate-950">
                  BOOK
                </button>
                <div className="lg:border-l-2 border-b-2  border-l-2 lg:border-t-0 lg:border-r-0 border-solid border-slate-950 h-[70%] w-[50%] lg:w-[40%] bg-amber-500">
                  <Image
                    className="h-full  min-h-[30vh]  max-h-[40vh] lg:max-h-[45vh] object-cover"
                    src={Y}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
      {/* Piercing end */}
    </ul>
  );
};

export default DropDown;
