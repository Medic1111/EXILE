import Image from "next/image";

const Profile = ({ title, exp, portfolio, book, src }) => {
  return (
    <li
      data-testid="tattoo"
      className="flex flex-col lg:flex-row justify-between bg-slate-50 h-96 w-screen h-auto min-h-[85vh] border-solid border-b-2 mt-[-5px] border-slate-950 "
    >
      <div className="h-[100%] flex  flex-col justify-between w-full   ">
        <div className=" border-b-2 border-solid border-slate-950">
          <p className="h-[7.5vh] flex items-center justify-start text-5xl pl-1 lg:text-6xl border-b-2 border-solid border-slate-950">
            PROFILE:
          </p>
          <p className="h-[7.5vh] flex items-center justify-start text-5xl pl-1 lg:text-6xl">
            {title.toUpperCase()}
          </p>
          <p className="h-[7.5vh] flex items-center justify-start text-5xl pl-1 lg:text-6xl border-t-2 border-solid  border-slate-950">
            <span className="text-rose-700">
              {new Date().getFullYear() - exp}
            </span>{" "}
            -YEARS
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
                src={src}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Profile;
