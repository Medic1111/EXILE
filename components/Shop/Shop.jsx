import ShopVideo from "./ShopVideo/ShopVideo";
const urlArr = [
  {
    url: "https://res.cloudinary.com/dfid6vhes/video/upload/v1690569093/tattoing_ul83ys.mp4",
  },
  {
    url: "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572772/replace_mcnn6c.mp4",
  },
  {
    url: "https://res.cloudinary.com/dfid6vhes/video/upload/v1690572295/tattoing2_g2ubhq.mp4",
  },
  {
    url: "https://res.cloudinary.com/dfid6vhes/video/upload/v1690571969/pinktat_cogjsh.mp4",
  },
];
const Shop = () => {
  return (
    <li
      data-testid="shop"
      className="bg-slate-50 min-h-[85vh] border-solid border-b-4 w-full h-full border-[#0d1322] py-10"
    >
      {/* <section className="overflow-auto grid p-5 lg:p-10 min-h-screen grid-cols-2 sm:grid-cols-4   lg:grid-cols-5 gap-10 wrap bg-slate-50"> */}
      <section className="overflow-auto grid min-h-screen grid-cols-1 md:grid-cols-4 gap-10 wrap bg-slate-50">
        {urlArr.map((obj, index) => {
          return <ShopVideo key={`VIDEO_${index}`} url={obj.url} />;
        })}
      </section>
    </li>
  );
};

export default Shop;
