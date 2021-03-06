import Head from "next/head";
import { COLORS } from "../styles/colors";
import DownloadTheApp from "../components/organisms/downloadTheApp";
import TechnologyContent from "../components/organisms/technology-content";
import FreeClass from "../components/organisms/freeClasses";
import StayOn from "../components/atoms/stay-on-grafit";
import StayOnScreen from "../components/organisms/stay-on";

export default function KnowTheApp() {
  return (
    <>
      <DownloadTheApp />
      <TechnologyContent />
      <FreeClass />
      <StayOn />
      <StayOnScreen />
    </>
  );
}
