import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const Esquilo = dynamic(() => import("../components/organisms/esquilo"), {
  ssr: false,
});

const EsquiloMobile = dynamic(() => import("../components/mobile/esquilo"), {
  ssr: false,
});

const NewschoolGrafit = dynamic(
  () => import("../components/atoms/newschool-grafit"),
  { ssr: false }
);

const NewschoolGrafitMobile = dynamic(
  () => import("../components/mobile/newschool-grafit"),
  { ssr: false }
);

const OurVision = dynamic(() => import("../components/organisms/ourVision"), {
  ssr: false,
});

const OurVisionMobile = dynamic(() => import("../components/mobile/ourVision"), {
  ssr: false,
});

const OurValues = dynamic(() => import("../components/organisms/ourValues"), {
  ssr: false,
});

const OurValuesMobile = dynamic(() => import("../components/mobile/ourValues"), {
  ssr: false,
});

const Carousel = dynamic(() => import("../components/organisms/carousel"), {
  ssr: false,
});

const CarouselMobile = dynamic(() => import("../components/mobile/carousel"), {
  ssr: false,
});

const OurTeam = dynamic(() => import("../components/organisms/ourTeam"), {
  ssr: false,
});

const OurTeamMobile = dynamic(() => import("../components/mobile/ourTeam"), {
  ssr: false,
});


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
      <EsquiloMobile />
      <NewschoolGrafitMobile />
      <OurVisionMobile />
      <OurValuesMobile />
      <CarouselMobile />
      <OurTeamMobile />
    </>
  );
}

function Desktop() {
  return (
    <>
      <Esquilo />
      <NewschoolGrafit />
      <OurVision />
      <OurValues />
      <Carousel />
      <OurTeam />
    </>
  );
}
