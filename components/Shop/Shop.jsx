const Shop = () => {
  return (
    <li
      data-testid="shop"
      className="bg-slate-50 min-h-[85vh] border-solid border-b-4 w-full h-full border-[#0d1322] py-10"
    >
      {/* <section className="overflow-auto grid p-5 lg:p-10 min-h-screen grid-cols-2 sm:grid-cols-4   lg:grid-cols-5 gap-10 wrap bg-slate-50"> */}
      <section className="overflow-auto grid min-h-screen grid-cols-1 md:grid-cols-4 gap-10 wrap bg-slate-50">
        <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl col-span-2 ">
          <video
            className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
            loop
            muted
            autoPlay
            defaultMuted
            webkit-playsinline
            playsInline
            controls
          >
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690569093/tattoing_ul83ys.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690569093/tattoing_ul83ys.mp4"
              }
              type="video/ogg"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
        </div>
        <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl col-span-2 ">
          <video
            className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
            loop
            muted
            autoPlay
            defaultMuted
            webkit-playsinline
            playsInline
            controls
          >
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572772/replace_mcnn6c.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572772/replace_mcnn6c.mp4"
              }
              type="video/ogg"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
        </div>
        <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl col-span-2 ">
          <video
            className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
            loop
            muted
            autoPlay
            defaultMuted
            webkit-playsinline
            playsInline
            controls
          >
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572295/tattoing2_g2ubhq.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572295/tattoing2_g2ubhq.mp4"
              }
              type="video/ogg"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
        </div>
        <div className="p-5 lg:p-10  col-span-1 text-2xl sm:text-3xl md:text-5xl col-span-2 ">
          <video
            className="border-solid border-2 border-[#0d1322]  object-cover w-full h-full "
            loop
            muted
            autoPlay
            defaultMuted
            webkit-playsinline
            playsInline
            controls
          >
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690571969/pinktat_cogjsh.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
            <source
              src={
                "https://res.cloudinary.com/dfid6vhes/video/upload/v1690571969/pinktat_cogjsh.mp4"
              }
              type="video/ogg"
            />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video>
        </div>
      </section>
    </li>
  );
};

export default Shop;
