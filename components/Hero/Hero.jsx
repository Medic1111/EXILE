import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import HeroImg from "../../public/mach.png";
import { styles } from "./styles";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>Exile Tattoo and Piercing</h1>
        <Image
          alt="Shows a man with tattoo on his back and arms"
          className={styles.img}
          src={HeroImg}
        />
      </div>
      <Link
        aria-label="link to enter the application"
        href={"/main"}
        className={styles.btn}
      >
        <AiOutlineArrowRight />
      </Link>
    </section>
  );
};

export default Hero;
