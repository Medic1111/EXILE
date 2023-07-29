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

        {/* MARKER */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        ></link>
        {/* OPEN SANS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
