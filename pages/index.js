import Head from "next/head";
import { common } from "../components/common_styles/common";
import Hero from "../components/Hero/Hero";

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
      <Hero />
    </div>
  );
}
