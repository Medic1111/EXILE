import { styles } from "../styles";

const Hours = () => {
  return (
    <ul className={styles.hoursUl}>
      <p className={styles.hoursTitle}>BUSINESS HOURS</p>
      <li className={styles.hoursLi}>
        <span>Mon:</span> CLOSED
      </li>
      <li className={styles.hoursLi}>
        <span>Tue:</span> 2:00 - 9:00 PM
      </li>
      <li className={styles.hoursLi}>
        <span>Wed:</span> 2:00 - 9:00 PM
      </li>
      <li className={styles.hoursLi}>
        <span>Thu:</span> 2:00 - 9:00 PM
      </li>
      <li className={styles.hoursLi}>
        <span>Fri:</span> 2:00 - 9:00 PM
      </li>
      <li className={styles.hoursLi}>
        <span>Sat:</span> 2:00 - 9:00 PM
      </li>
      <li className={styles.hoursLi}>
        <span>Sun:</span> CLOSED
      </li>
    </ul>
  );
};

export default Hours;
