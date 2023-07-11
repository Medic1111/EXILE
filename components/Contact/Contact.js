import { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import ContactForm from "./ContactForm/ContactForm";
import Hours from "./Hours/Hours";
import Map from "./Map/Map";

const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full grow h-auto sm:min-h-screen bg-slate-50 lg:flex lg:items-center lg:justify-around border-t-2 border-solid border-slate-50">
      <div className="text-slate-950 lg:w-1/2 p-5 lg:pt-10 h-full lg:min-h-screen flex flex-col  items-start justify-between gap-5">
        <div className="h-full">
          <h2 className=" text-4xl lg:text-5xl lg:w-[90%]">
            We strive to provide you with top-notch quality services, and we are
            available to answer your questions.
          </h2>
          <span className="my-5 lg:my-10  flex  gap-3  text-l">
            <BiPhoneCall className="text-2xl" />{" "}
            <a
              className="text-blue-500 underline hover:text-blue-800"
              href="tel:786507-5653"
            >
              (786) 507-5653
            </a>
            <HiOutlineMapPin className="text-2xl" />{" "}
            <button
              onClick={() => setShowMap((prev) => !prev)}
              className="text-blue-500 underline hover:text-blue-800"
            >
              Directions
            </button>
          </span>

          <p className="text-slate-600">6634 Collins Avenue</p>
          <p className="text-slate-600">Miami Beach, FL 33141</p>
          <p className="text-slate-600">USA</p>
          {showMap && <Map />}
        </div>
        <Hours />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
