import Head from "next/head";
import { COLORS } from "../styles/colors";
import styles from "../styles/Home.module.css";
import Depositions from "../components/organisms/depositions";
import Metrics from "../components/organisms/metrics";
import EducaFavela from "../components/organisms/educa-favela";
import DonatePresentation from "../components/organisms/donatePresentation";
import BeADonor from "../components/atoms/donor-grafit";
import BolsaEducaPlus from "../components/organisms/donateBolsaEduca";
import Transparention from "../components/organisms/transparention";

export default function Do() {
  return (
    <>
      <EducaFavela />
      <DonatePresentation />
      <BeADonor />
      <Metrics />
      <BolsaEducaPlus />
      <Depositions />
      <Transparention />
    </>
  );
}
