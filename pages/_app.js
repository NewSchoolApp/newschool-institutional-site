import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = dynamic(() => import("../components/organisms/footer"), {
  ssr: false,
});
const Header = dynamic(() => import("../components/organisms/header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=1400" /> */}
        <link rel="shortcut icon" href="favicon.ico" />
        <title>New School</title>
      </Head>
      <Header />
      <Component style={{ marginTop: "20vh" }} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
