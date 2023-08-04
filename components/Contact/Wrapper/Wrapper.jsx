import { styles } from "../styles";

const Wrapper = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Wrapper;
