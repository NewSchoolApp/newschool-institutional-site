import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/estilo.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { isMobile } from "react-device-detect";

const Footer = dynamic(() => import("../components/organisms/footer"), {
  ssr: false,
});
const Header = dynamic(() => import("../components/organisms/header"), {
  ssr: false,
});

const FooterMobile = dynamic(() => import("../components/mobile/footer"), {
  ssr: false,
});
const HeaderMobile = dynamic(() => import("../components/mobile/header"), {
  ssr: false,
});


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.ico" />
        <title>New School</title>
      </Head>     
      {isMobile ? <HeaderMobile /> : <Header />}             
      <Component style={{ marginTop: "20vh" }} {...pageProps} />            
      {isMobile ? <FooterMobile /> : <Footer />}       
    </>
  );
}

export default MyApp;
