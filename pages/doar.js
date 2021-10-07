import dynamic from 'next/dynamic'
import { isMobile } from "react-device-detect";

const Depositions = dynamic(
  () => import("../components/organisms/depositions"),
  { ssr: false }
)

const DepositionsMobile = dynamic(
  () => import("../components/mobile/depositions"),
  { ssr: false }
)

const Metrics = dynamic(
  () => import("../components/organisms/metrics"),
  { ssr: false }
)

const MetricsMobile = dynamic(
  () => import("../components/mobile/metrics"),
  { ssr: false }
)

const EducaFavela = dynamic(
  () => import("../components/organisms/educa-favela"),
  { ssr: false }
)

const EducaFavelaMobile = dynamic(
  () => import("../components/mobile/educa-favela"),
  { ssr: false }
)

const DonatePresentation = dynamic(
  () => import("../components/organisms/donatePresentation"),
  { ssr: false }
)

const DonatePresentationMobile = dynamic(
  () => import("../components/mobile/donatePresentation"),
  { ssr: false }
)
const BeADonor = dynamic(
  () => import("../components/atoms/donor-grafit"),
  { ssr: false }
)

const BolsaEducaPlus = dynamic(
  () => import("../components/organisms/donateBolsaEduca"),
  { ssr: false }
)

const BolsaEducaPlusMobile = dynamic(
  () => import("../components/mobile/donateBolsaEduca"),
  { ssr: false }
)
const Transparention = dynamic(
  () => import("../components/organisms/transparention"),
  { ssr: false }
)

const TransparentionMobile = dynamic(
  () => import("../components/mobile/transparention"),
  { ssr: false }
)

export default function Do() {
  return (
    <>
    {isMobile ? <Mobile /> : <Desktop />} 
    </>
    );
  }
  function Desktop() {
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
  function Mobile() {
    return (
      <>
      <EducaFavelaMobile />
      <DonatePresentationMobile />
      <MetricsMobile />
      <BolsaEducaPlusMobile />
    
     
     
    </>
    );
  }
    
  
