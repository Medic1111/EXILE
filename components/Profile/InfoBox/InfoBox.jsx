import { styles } from "../styles";

const InfoBox = ({ title, exp }) => {
  return (
    <div className={styles.infoBox}>
      <p className={styles.infoP}>PROFILE:</p>
      <p className={`${styles.infoP}`}>{title.toUpperCase()}</p>
      <p className={`${styles.infoP}  border-none`}>
        <span className={styles.redSpan}>{new Date().getFullYear() - exp}</span>
        -YEARS
      </p>
    </div>
  );
};

export default InfoBox;
