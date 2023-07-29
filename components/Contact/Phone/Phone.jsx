import { styles } from "../styles";

const Phone = () => {
  return (
    <div className=" px-5  pb-[15vh] pt-[10vh] h-[70vh] sm:h-auto  flex items-center justify-start">
      <a
        href="tel:786507-5653"
        aria-label="7 8 6. 5 0 7. 5 6 5 3."
        className={`${styles.formTitle} font-marker  cursor-pointer pl-5 text-start hover:underline decoration-rose-600 transition  duration-2000 ease-in-out text-8xl  sm:text-7xl md:text-9xl  xl:text-[14rem]`}
      >
        .786
        <br />
        .507
        <br />
        .5653
      </a>
    </div>
  );
};

export default Phone;
