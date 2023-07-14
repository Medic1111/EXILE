import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Link from "next/link";

const DropTab = ({ id, title, stateFoo, state }) => {
  return (
    <Link
      href={`#${id}`}
      scroll={false}
      id={id}
      data-testid="trigger-shop"
      onClick={() => stateFoo((prev) => !prev)}
      className="flex items-center justify-between bg-slate-950 border-solid border-b-2  border-slate-50 w-full text-end px-2 py-10 text-slate-50 text-3xl md:text-5xl cursor-pointer hover:bg-slate-950 hover:text-slate-50 border-slate-50"
    >
      <span>{state ? <AiOutlineUp /> : <AiOutlineDown />}</span>
      <p>{title.toUpperCase()}</p>
    </Link>
  );
};

export default DropTab;
