import dynamic from 'next/dynamic'

const Depositions = dynamic(
  () => import("../components/organisms/depositions"),
  { ssr: false }
)

const Metrics = dynamic(
  () => import("../components/organisms/metricsBaskets"),
  { ssr: false }
)

const EducaFavela = dynamic(
  () => import("../components/organisms/favelaSemFome"),
  { ssr: false }
)

const DonatePresentation = dynamic(
  () => import("../components/organisms/ourData"),
  { ssr: false }
)
const BeADonor = dynamic(
  () => import("../components/atoms/donor-grafit"),
  { ssr: false }
)

const BolsaEducaPlus = dynamic(
  () => import("../components/organisms/favelaSemFomePage"),
  { ssr: false }
)

export default function Do() {
  return (
    <>
      <EducaFavela />
      <DonatePresentation />
      <BeADonor />
      <Metrics />
      <BolsaEducaPlus />
    </>
  );
}
