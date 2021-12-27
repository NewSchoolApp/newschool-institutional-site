import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";



const NsTech = dynamic(() => import("../components/organisms/nsTech"), {
  ssr: false,
});

const NsTech2 = dynamic(() => import("../components/organisms/nsTech2"), {
  ssr: false,
});

const EsquiloMobile = dynamic(() => import("../components/mobile/esquilo"), {
  ssr: false,
});
const DownloadTheAppTech = dynamic(
  () => import("../components/organisms/downloadTheAppTech"),
  { ssr: false }
)

const NsTechMobile = dynamic(() => import("../components/mobile/nsTech"), {
  ssr: false,
});

const NsTech2Mobile = dynamic(() => import("../components/mobile/nsTech2"), {
  ssr: false,
});

const DownloadTheAppTechMobile = dynamic(
  () => import("../components/mobile/downloadTheAppTech"),
  { ssr: false }
)


export default function NewSchool() {
  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}     
    </>
  );
}

function Mobile() {
  return (
    <>
     <NsTechMobile/>
      <NsTech2Mobile/>
      <DownloadTheAppTechMobile/>
     
    </>
  );
}

function Desktop() {
  return (
    <>
    
      <NsTech/>
      <NsTech2/>
      <DownloadTheAppTech/>
     
    </>
  );
}
