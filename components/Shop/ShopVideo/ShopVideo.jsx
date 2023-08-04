const ShopVideo = ({ url, title, text, index }) => {
  return (
    // <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl  col-span-2 ">
    //   <video
    //     className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
    //     loop
    //     muted
    //     autoPlay
    //     defaultmuted="true"
    //     webkit-playsinline="true"
    //     playsInline
    //     controls
    //   >
    //     <source src={url} type="video/mp4" />
    //     Your browser does not support the video tag. I suggest you upgrade your
    //     browser.
    //     <source src={url} type="video/ogg" />
    //     Your browser does not support the video tag. I suggest you upgrade your
    //     browser.
    //   </video>
    // </div>

    // -------------------
    // TEST
    // -------------------

    <div className="overflow-auto md:flex md:justify-between  p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl  col-span-4 ">
      <div className=" md:w-1/2 md:flex gap-7 md:flex-col ">
        <div>
          <p className="uppercase h-[7.5vh] text-[#0d1322] flex items-center justify-start text-3xl sm:text-5xl     font-light  border-solid border-[#0d1322]">
            EPISODE-{" "}
            <span className="text-bold text-rose-700"> 0{index + 1} </span>{" "}
          </p>
          <p className="uppercase h-[7.5vh] text-[#0d1322] flex items-center justify-start text-3xl sm:text-5xl     font-light  border-solid border-[#0d1322]">
            {title}
          </p>
        </div>
        <p className="py-5 md:py-0 tracking-wide text-xl md:2xl md:max-w-[80%]  text-[#0d1322]">
          {text}
        </p>
      </div>
      <video
        className="border-solid border-2 border-[#0d1322]  object-cover w-full md:w-1/2 md:h-full "
        loop
        muted
        autoPlay
        defaultmuted="true"
        webkit-playsinline="true"
        playsInline
        controls
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
        <source src={url} type="video/ogg" />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    </div>
  );
};

export default ShopVideo;
