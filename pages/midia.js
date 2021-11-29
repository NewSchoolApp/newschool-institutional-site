import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";




const MidiaContato = dynamic(
  () => import("../components/organisms/midiaContato"),
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


const NewSchoolMidiaMobile = dynamic(
  () => import("../components/mobile/NewSchoolMidia"),
  {
    ssr: false,
  }
);

const MidiaContatoMobile = dynamic(
  () => import("../components/mobile/our-partnership"),
  {
    ssr: false,
  }
);

const NewSchoolMidia = dynamic(
  () => import("../components/organisms/NewSchoolMidia"),
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
     
     <NewSchoolMidiaMobile />
      {/*<NewSchoolMidia2 />*/}
      <MidiaContatoMobile />
      <VolunteersMobile />
    </>
  );
}
