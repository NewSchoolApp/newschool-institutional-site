import dynamic from 'next/dynamic'

const Depositions = dynamic(
  () => import("../components/organisms/depositions"),
  { ssr: false }
)

const Metrics = dynamic(
  () => import("../components/organisms/metrics"),
  { ssr: false }
)

const EducaFavela = dynamic(
  () => import("../components/organisms/educa-favela"),
  { ssr: false }
)

const DonatePresentation = dynamic(
  () => import("../components/organisms/donatePresentation"),
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

const Transparention = dynamic(
  () => import("../components/organisms/transparention"),
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
      <Depositions />
      <Transparention />
    </>
  );
}
