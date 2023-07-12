import { useState } from "react";
const ContactForm = () => {
  const [showFeed, setShowFeed] = useState(false);

  return (
    <form className=" bg-slate-950  w-full lg:w-1/2 h-full md:min-h-screen flex flex-col items-start justify-start  gap-8 p-5 lg:px-10 py-10 lg:py-0">
      <p className="text-blue-400 text-slate-50 mt-10  text-5xl lg:text-7xl mb-5">
        CONTACT US
      </p>
      <input
        type="text"
        placeholder="Name"
        className="mt-10 text-slate-50 text-xl bg-slate-950 w-full h-[7.5vh]  border-solid border-2 border-slate-50 outline-blue-500 rounded pl-[0.25em]"
      />
      <input
        type="text"
        placeholder="Email"
        className="text-slate-50 text-xl bg-slate-950 w-full h-[7.5vh]   border-solid border-2 border-slate-50 outline-blue-500 rounded pl-[0.25em]"
      />
      <input
        type="tel"
        placeholder="Phone number"
        className="text-slate-50 text-xl bg-slate-950 w-full h-[7.5vh]   border-solid border-2 border-slate-50 outline-blue-500 rounded pl-[0.25em]"
      />
      {showFeed && <p className="pt-5 text-yellow-500 underline">feedback</p>}
      <input
        data-testid="submit"
        type="submit"
        className="bg-slate-950 text-xl mt-10 w-full h-[7.5vh]  border-solid border-2 outline-blue-400 text-slate-50 cursor-pointer rounded pl-[0.25em] hover:bg-lime-400 hover:text-slate-950"
      />
    </form>
  );
};

export default ContactForm;
