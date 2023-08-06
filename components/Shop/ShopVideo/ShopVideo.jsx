const ShopVideo = ({ url, title, text, index }) => {
  return (
    <div className="overflow-auto lg:flex lg:justify-between  p-5 lg:py-10   text-2xl sm:text-3xl md:text-5xl ">
      <div className=" pb-5 lg:pb-0 lg:w-1/2 md:flex gap-7 md:flex-col justify-between">
        <div>
          <div>
            <p className="pb-2 uppercase text-[#0d1322] flex items-center justify-start text-3xl sm:text-5xl     font-light  border-solid border-[#0d1322]">
              EPISODE-{" "}
              <span className="text-bold text-rose-600"> 0{index + 1} </span>{" "}
            </p>
            <p className="uppercase text-[#0d1322] flex items-center justify-start text-3xl sm:text-5xl     font-light  border-solid border-[#0d1322]">
              {title}
            </p>
          </div>
          <p className=" pt-5 pb-10  tracking-wide text-xl md:2xl lg:max-w-[80%]  text-[#0d1322]">
            {text}
          </p>
        </div>
        <div className="text-xs  uppercase lg:text-md w-full lg:max-w-[80%] flex justify-between">
          <a className=" underline cursor-pointer hover:text-rose-600 text-rose-400">
            transcript
          </a>
          {index === 3 && (
            <a className=" underline cursor-pointer hover:text-rose-600 text-rose-400">
              Download Care Guide
            </a>
          )}
        </div>
      </div>
      <video
        className=" border-solid border-2 border-[#0d1322]  object-cover w-full lg:w-1/2 lg:h-full "
        loop
        muted
        autoPlay
        defaultmuted="true"
        webkit-playsinline="true"
        playsInline
        controls
      >
        {/* <track
          label="English"
          kind="subtitles"
          srclang="en"
          src="captions/vtt/sintel-en.vtt"
          default
        /> */}
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
