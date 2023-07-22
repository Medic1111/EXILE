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
          <Link href={`/main/portfolio/${portfolio}`} className={styles.btn}>
            PORTFOLIO
          </Link>
          <button className={`${styles.btn} border-y-2`}>BOOK</button>
          <div className={styles.imgBox}>
            <Image className={styles.img} src={src} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Profile;
