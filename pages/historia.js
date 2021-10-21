import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const OurHistory = dynamic(() => import("../components/atoms/our-history"), {
  ssr: false,
});

const OurHistoryMobile = dynamic(() => import("../components/mobile/our-history"), {
  ssr: false,
});



const OurHistoryBackground = dynamic(
  () => import("../components/atoms/our-hisotry-background"),
  {
    ssr: false,
  }
);

const OurHistoryBackgroundMobile = dynamic(
  () => import("../components/mobile/our-hisotry-background"),
  {
    ssr: false,
  }
);
const History = dynamic(() => import("../components/organisms/history"), {
  ssr: false,
});

const HistoryVideo = dynamic(() => import("../components/organisms/historyVideo"), {
  ssr: false,
});

const HistoryMobile = dynamic(() => import("../components/mobile/history"), {
  ssr: false,
});

  

const HistoriaRodape = dynamic(() => import("../components/organisms/historiarodape"), {
  ssr: false,
});

const Historiacrime = dynamic(() => import("../components/organisms/historiacrime"), {
  ssr: false,
});

const HistoryVideoMobile = dynamic(
  () => import("../components/mobile/historyVideo"),
  {
    ssr: false,
  }
);

export default function Historia() {
  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}     
    </>
  );
}

function Desktop() {
  return (
    <>
     
      <HistoryVideo />
      <OurHistory /> 
     {/* <OurHistoryBackground />*/}
      {/*<History />*/}
      <Historiacrime/>
      <HistoriaRodape />
     
    </>
  );
}

function Mobile() {
  return (
    <>
      <HistoryVideoMobile />
      <OurHistoryMobile />
      <OurHistoryBackgroundMobile />
      <HistoryMobile />
      
    </>
  );
}
