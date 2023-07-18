import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMapPin } from "react-icons/hi2";
import Map from "../Map/Map";
import { useState } from "react";
import { styles } from "../styles";

const Text = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className={styles.textBox}>
      <h2 className={styles.h2}>
        We strive to provide you with top-notch quality services, and we are
        available to answer your questions.
      </h2>
      <span className={styles.span}>
        <BiPhoneCall className={styles.icon} />{" "}
        <a className={styles.anchor} href="tel:786507-5653">
          (786) 507-5653
        </a>
        <HiOutlineMapPin className={styles.icon} />{" "}
        <button
          onClick={() => setShowMap((prev) => !prev)}
          className={styles.anchor}
        >
          Directions
        </button>
      </span>

      <p className={styles.p}>6634 Collins Avenue</p>
      <p className={styles.p}>Miami Beach, FL 33141</p>
      <p className={styles.p}>USA</p>
      {showMap && <Map />}
    </div>
  );
};

export default Text;
