import { styles } from "../styles";
import { AiOutlinePhone } from "react-icons/ai";
const Phone = () => {
  return (
    <div className="fixed  bottom-2 right-2">
      <a
        href="tel:786507-5653"
        aria-label="7 8 6. 5 0 7. 5 6 5 3."
        className={` text-rose-500 hover:text-rose-700 text-6xl font-marker  cursor-pointer `}
      >
        <AiOutlinePhone />
      </a>
    </div>
  );
};

export default Phone;
