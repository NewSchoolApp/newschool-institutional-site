import dynamic from 'next/dynamic'

const DownloadTheApp = dynamic(
  () => import("../components/organisms/downloadTheApp"),
  { ssr: false }
)

const TechnologyContent = dynamic(
  () => import("../components/organisms/technology-content"),
  { ssr: false }
)

const FreeClass = dynamic(
  () => import("../components/organisms/freeClasses"),
  { ssr: false }
)

const StayOn = dynamic(
  () => import("../components/atoms/stay-on-grafit"),
  { ssr: false }
)
const StayOnScreen = dynamic(
  () => import("../components/organisms/stay-on"),
  { ssr: false }
)

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
