import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import Map from "../Map/Map";
import { useState } from "react";

const Text = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="h-full">
      <h2 className=" text-3xl lg:text-5xl lg:w-[90%]">
        We strive to provide you with top-notch quality services, and we are
        available to answer your questions.
      </h2>
      <span className="my-5 lg:my-10  flex  gap-3  text-l">
        <BiPhoneCall className="text-2xl" />{" "}
        <a
          className="text-rose-400 underline hover:text-rose-600"
          href="tel:786507-5653"
        >
          (786) 507-5653
        </a>
        <HiOutlineMapPin className="text-2xl" />{" "}
        <button
          onClick={() => setShowMap((prev) => !prev)}
          className="text-rose-400 underline hover:text-rose-600"
        >
          Directions
        </button>
      </span>

      <p className="text-slate-600">6634 Collins Avenue</p>
      <p className="text-slate-600">Miami Beach, FL 33141</p>
      <p className="text-slate-600">USA</p>
      {showMap && <Map />}
    </div>
  );
};

export default Text;
