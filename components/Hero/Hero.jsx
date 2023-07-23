import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { styles } from "./styles";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.txtBox}>
        <h1 className={styles.title}>
          Exile <br /> Tattoo <br />
          and <br /> Piercing
        </h1>
      </div>
      <Link
        aria-label="link to enter the application"
        href={"/main"}
        className={styles.btn}
      >
        {/* <AiOutlineArrowRight /> */}
        {">"}
      </Link>
    </section>
  );
};

export default Hero;
