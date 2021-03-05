import Head from "next/head";
import OurHistory from "../components/atoms/our-history";
import OurHistoryBackground from "../components/atoms/our-hisotry-background";
import History from "../components/organisms/history";
import HistoryVideo from "../components/organisms/historyVideo";

export default function AboutUs() {
  return (
    <>
      <History />
      <OurHistory />
      <OurHistoryBackground />
      <HistoryVideo />
    </>
  );
}
