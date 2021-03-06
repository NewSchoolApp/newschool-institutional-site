import dynamic from "next/dynamic";
import "../styles/globals.css";

const Footer = dynamic(
  () => import("../components/organisms/footer"),
  { ssr: false }
)
const Header = dynamic(
  () => import("../components/organisms/header"),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component style={{ marginTop: "20vh" }} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
