import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import HeroImg from "../../public/mach.png";
import { styles } from "./styles";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.txtBox}>
        <h1 className={styles.title}>
          Exile <br /> Tattoo <br />
          and <br /> Piercing
        </h1>

        {/* <Image
          alt="Shows a man with tattoo on his back and arms"
          className={styles.img}
          src={HeroImg}
        /> */}
      </div>
      <Fade>
        <Link
          aria-label="link to enter the application"
          href={"/main"}
          className={styles.btn}
        >
          <AiOutlineArrowRight />
        </Link>
      </Fade>
    </section>
  );
};

export default Hero;
