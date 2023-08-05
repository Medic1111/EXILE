import ShopVideo from "./ShopVideo/ShopVideo";
import { urlArr } from "./data/data";

const Shop = () => {
  return (
    <li
      data-testid="shop"
      className=" bg-slate-50 min-h-[85vh] border-solid border-b-4 w-full h-full  border-[#0d1322] py-10"
    >
      <section className=" overflow-auto grid  grid-cols-1 md:grid-cols-4 gap-10 wrap  bg-slate-50 h-auto">
        {urlArr.map((obj, index) => {
          return (
            <ShopVideo
              key={`VIDEO_${index}`}
              url={obj.url}
              index={index}
              text={obj.text}
              title={obj.title}
            />
          );
        })}
      </section>
    </li>
  );
};

export default Shop;
