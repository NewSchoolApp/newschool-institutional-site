import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

const BePart = dynamic(() => import("../components/organisms/be-part"), {
  ssr: false,
});

const BePartMobile = dynamic(() => import("../components/mobile/be-part"), {
  ssr: false,
});

const OurPartnership = dynamic(
  () => import("../components/organisms/our-partnership"),
  {
    ssr: false,
  }
);

const OurPartnershipMobile = dynamic(
  () => import("../components/mobile/our-partnership"),
  {
    ssr: false,
  }
);
const BeVolunteerGrafit = dynamic(
  () => import("../components/atoms/be-volunteer"),
  {
    ssr: false,
  }
);


const BeVolunteer = dynamic(
  () => import("../components/organisms/be-volunteer"),
  {
    ssr: false,
  }
);

const BeVolunteerMobile = dynamic(
  () => import("../components/mobile/be-volunteer"),
  {
    ssr: false,
  }
);

const Volunteers = dynamic(
  () => import("../components/organisms/volunteers"),
  {
    ssr: false,
  }
);


const VolunteersMobile = dynamic(
  () => import("../components/mobile/volunteers"),
  {
    ssr: false,
  }
);

const VolunteersHistory = dynamic(
  () => import("../components/organisms/voluntieersHistory"),
  {
    ssr: false,
  }
);

const VolunteersHistoryMobile = dynamic(
  () => import("../components/mobile/voluntieersHistory"),
  {
    ssr: false,
  }
);
export default function JoinUs() {
  return (
    <>
    {isMobile ? <Mobile /> : <Desktop />} 
    </>
  );
}
function Desktop() {
  return (
      <>
      <BePart />
      <OurPartnership />
      <BeVolunteerGrafit />
      <BeVolunteer />
      <VolunteersHistory />
      <Volunteers />
    </>
  );
}
function Mobile() {
  return (
      <>
      <BePartMobile/>
      <OurPartnershipMobile />
      <BeVolunteerMobile />
      <VolunteersHistoryMobile />
      <VolunteersMobile />
    </>
  );
}
