import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Exile Tattoo and Piercing, LLC</title>
        <meta
          name="description"
          content="Exile Tattoo and Piercing, LLC. Miami Beach local tattoo and body piercing shop located at: 6634 Collins Avenue, Miami Beach, FL 33141, USA"
        />
        <meta
          property="og:title"
          content="Exile Tattoo and Piercing, LLC"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Exile Tattoo and Piercing, LLC. Miami Beach local tattoo and body piercing shop located at: 6634 Collins Avenue, Miami Beach, FL 33141, USA"
          key="ogdesc"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
