import dynamic from 'next/dynamic'
import { isMobile } from "react-device-detect";

const DownloadTheApp = dynamic(
  () => import("../components/organisms/downloadTheApp"),
  { ssr: false }
)

const DownloadTheAppMobile = dynamic(
  () => import("../components/mobile/downloadTheApp"),
  { ssr: false }
)

const TechnologyContent = dynamic(
  () => import("../components/organisms/technology-content"),
  { ssr: false }
)

const TechnologyContentMobile = dynamic(
  () => import("../components/mobile/technology-content"),
  { ssr: false }
)

const FreeClass = dynamic(
  () => import("../components/organisms/freeClasses"),
  { ssr: false }
)

const FreeClassMobile = dynamic(
  () => import("../components/mobile/freeClasses"),
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

const StayOnScreenMobile = dynamic(
  () => import("../components/mobile/stay-on"),
  { ssr: false }
)
export default function KnowTheApp() {
  return (
    <>
    {isMobile ? <Mobile /> : <Desktop />} 
    </>
  );
}
function Desktop() {
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
function Mobile() {
  return (
    <>
     <DownloadTheAppMobile />
      <TechnologyContentMobile />
      <FreeClassMobile />      
      <StayOnScreenMobile />
    </>
  );
}
