import Image from "next/image";
import { styles } from "../styles";

const Avatar = ({ src }) => {
  return (
    <div className={styles.imgBox}>
      <Image
        alt="Artists from the tattoo piercing shop"
        className={styles.img}
        src={src}
      />
    </div>
  );
};

export default Avatar;
