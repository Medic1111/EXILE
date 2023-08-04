import { styles } from "./styles";
import InfoBox from "./InfoBox/InfoBox";
import PortLink from "./PortLink/PortLink";
import BookLink from "./BookLink/BookLink";
import Avatar from "./Avatar/Avatar";

const Profile = ({ title, exp, portfolio, book, src }) => {
  return (
    <li data-testid="tattoo" className={styles.li}>
      <div className={styles.mainContainer}>
        <InfoBox exp={exp} title={title} />
        <div className={styles.btnImgBox}>
          <PortLink />
          <BookLink />
          <Avatar src={src} />
        </div>
      </div>
    </li>
  );
};

export default Profile;
