// WALLPAPERACCESS
const Intro = () => {
  return (
    <div class="flex h-screen w-full items-center justify-center  border-solid border-b-4 border-[#0d1322] bg-slate-50">
      <video
        className="sm:object-cover w-full h-full "
        loop
        muted
        autoPlay
        defaultMuted
        playsinline
      >
        <source
          src={
            "https://res.cloudinary.com/dfid6vhes/video/upload/v1690383098/production_id_4124032_2160p_sh7cqo.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
        <source
          src={
            "https://res.cloudinary.com/dfid6vhes/video/upload/v1690383098/production_id_4124032_2160p_sh7cqo.mp4"
          }
          type="video/ogg"
        />
        Your browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
    </div>
  );
};

export default Intro;
