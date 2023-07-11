import Head from "next/head";
import Link from "next/link";
import { common } from "../components/common_styles/common";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <div className={common.pageContainer}>
      <Head>
        <title>Exile Tattoo and Piercing, LLC</title>
        <meta
          name="description"
          content="Miami Beach local tattoo and piercing shop"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={
          "h-auto w-full flex flex-col lg:flex-row start-center justify-between md:justify-start gap-10 px-5 py-10"
        }
      >
        <div>
          <h1 className="mb-10 text-slate-50 text-6xl lg:text-8xl font-bold ">
            Exile Tattoo and Piercing
          </h1>
          <img
            className="rounded-l w-full bg-blue-400 object-cover sm:h-[50vh] lg:h-[60vh]"
            src="./tat.png"
          />
        </div>
        <Link
          href={"/main"}
          className="h-16 cursor-pointer flex items-center justify-center rounded-l text-4xl border-2 border-solid border-slate-50 text-slate-50 lg:w-1/3 lg:mt-5 hover:bg-slate-50 hover:text-slate-950  "
        >
          <AiOutlineArrowRight />
        </Link>
      </section>
    </div>
  );
}
