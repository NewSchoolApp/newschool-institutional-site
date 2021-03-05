import Footer from "../components/organisms/footer";
import Header from '../components/organisms/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header />
  <Component style={{marginTop: "20vh"}} {...pageProps} />
  <Footer />
  </>
}

export default MyApp
