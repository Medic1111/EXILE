import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { styles } from "./styles";

const DropTab = ({ id, title, stateFoo, state }) => {
  return (
    <button
      id={id}
      data-testid="trigger-shop"
      onClick={() => stateFoo((prev) => !prev)}
      className={styles.tab}
    >
      <span>{state ? "^" : "v"}</span>
      <p>{title.toUpperCase()}</p>
    </button>
  );
};

export default DropTab;
