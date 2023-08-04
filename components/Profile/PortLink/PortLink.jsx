import { styles } from "../styles";
import Link from "next/link";

const PortLink = () => {
  return (
    <Link
      target="_blank"
      href={`https://www.instagram.com/cass.tatts/?hl=en`}
      className={styles.btn}
    >
      PORTFOLIO
    </Link>
  );
};

export default PortLink;
