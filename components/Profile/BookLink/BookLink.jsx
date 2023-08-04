import { styles } from "../styles";
import Link from "next/link";

const BookLink = () => {
  return (
    <Link
      target="_blank"
      href={`https://calendly.com/paganowebdev/60min`}
      className={`${styles.btn} border-y-2`}
    >
      BOOK
    </Link>
  );
};

export default BookLink;
