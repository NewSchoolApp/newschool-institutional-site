import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const OurHistory = dynamic(() => import("../components/atoms/our-history"), {
  ssr: false,
});

const HistoryGrafit = dynamic(() => import("../components/atoms/historyGrafit"), {
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

const HistoryVideo = dynamic(() => import("../components/organisms/historyvideo"), {
  ssr: false,
});

const VideoHistory = dynamic(() => import("../components/organisms/videoHistory"), {
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
      <VideoHistory />
      <HistoryVideo />
      <OurHistory /> 
     {/* <OurHistoryBackground />*/}
      {/*<History />*/}
      <Historiacrime/>
      <HistoryGrafit />
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
