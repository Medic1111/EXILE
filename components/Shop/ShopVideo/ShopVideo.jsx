const ShopVideo = ({ url }) => {
  return (
    <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl col-span-2 ">
      <video
        className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
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
