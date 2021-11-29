import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";


const BePartMobile = dynamic(() => import("../components/mobile/be-part"), {
  ssr: false,
});

const MidiaContato = dynamic(
  () => import("../components/organisms/midiaContato"),
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

const NewSchoolMidia = dynamic(
  () => import("../components/organisms/newSchoolMidia"),
  {
    ssr: false,
  }
);
const NewSchoolMidia2 = dynamic(
  () => import("../components/organisms/newSchoolMidia2"),
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






const VolunteersMobile = dynamic(
  () => import("../components/mobile/volunteers"),
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

      <NewSchoolMidia />
      {/*<NewSchoolMidia2 />*/}
      <MidiaContato />
   
      
     
      
      
      
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
