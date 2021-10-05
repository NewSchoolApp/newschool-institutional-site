import React from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const VideoLoop = dynamic(() => import("../components/atoms/video-loop"), {
  ssr: false,
});

const VideoLoopMobile = dynamic(() => import("../components/mobile/video-loop"), {
  ssr: false,
});

const Presentation = dynamic(
  () => import("../components/organisms/presentation"),
  { ssr: false }
);

const PresentationMobile = dynamic(
  () => import("../components/mobile/presentation"),
  { ssr: false }
);

const Values = dynamic(() => import("../components/organisms/values"), {
  ssr: false,
});

const ValuesMobile = dynamic(() => import("../components/mobile/values"), {
  ssr: false,
});

const NewSchoolGrafit = dynamic(
  () => import("../components/atoms/newschool-grafit"),
  { ssr: false }
);
const BelieveUs = dynamic(() => import("../components/organisms/believe-us"), {
  ssr: false,
});
const BelieveUsMobile = dynamic(() => import("../components/mobile/believe-us"), {
  ssr: false,
});
const Parceiros = dynamic(() => import("../components/organisms/parceiros"), {
  ssr: false,
});
const ParceirosMobile = dynamic(() => import("../components/mobile/parceiros"), {
  ssr: false,
});
const Apoio = dynamic(() => import("../components/organisms/Apoio"), {
  ssr: false,
});
const ApoioMobile = dynamic(() => import("../components/mobile/Apoio"), {
  ssr: false,
});
const AboutUs = dynamic(() => import("../components/organisms/about-us"), {
  ssr: false,
});

const AboutUsMobile = dynamic(() => import("../components/mobile/about-us"), {
  ssr: false,
});

const GoTop = dynamic(() => import("../components/atoms/go-top"), {
  ssr: false,
});

export default function index() {
  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}     
    </>
  );
}
function Desktop() {
  return (
    <>
     <VideoLoop id="top" />
      <Presentation />
      <NewSchoolGrafit />
      <Values />
      <BelieveUs />
      <Parceiros />
      <Apoio />
      <AboutUs />
      <a href="#top">
        <GoTop />
      </a>
    </>
  );
}

function Mobile() {
  return (
    <>
      <VideoLoopMobile id="top" />
      <PresentationMobile />
      <ValuesMobile />
      <BelieveUsMobile />
      <ParceirosMobile />
      <ApoioMobile />
      <AboutUsMobile />
      
        
    </>
  );
}