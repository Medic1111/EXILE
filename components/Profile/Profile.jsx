import Image from "next/image";
import Link from "next/link";
import { styles } from "./styles";

const Profile = ({ title, exp, portfolio, book, src }) => {
  return (
    <li data-testid="tattoo" className={styles.li}>
      <div className={styles.mainContainer}>
        <div className={styles.infoBox}>
          <p className={styles.infoP}>PROFILE:</p>
          <p className={`${styles.infoP}`}>{title.toUpperCase()}</p>
          <p className={`${styles.infoP}  border-none`}>
            <span className={styles.redSpan}>
              {new Date().getFullYear() - exp}
            </span>
            -YEARS
          </p>
        </div>
        <div className={styles.btnImgBox}>
          <Link
            target="_blank"
            href={`https://www.instagram.com/cass.tatts/?hl=en`}
            className={styles.btn}
          >
            PORTFOLIO
          </Link>
          <Link
            target="_blank"
            href={`https://calendly.com/paganowebdev/60min`}
            className={`${styles.btn} border-y-2`}
          >
            BOOK
          </Link>
          <div className={styles.imgBox}>
            <Image
              alt="Artists from the tattoo piercing shop"
              className={styles.img}
              src={src}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Profile;
