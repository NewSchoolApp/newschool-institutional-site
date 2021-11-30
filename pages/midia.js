import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";





const MidiaContato = dynamic(
  () => import("../components/organisms/midiaContato"),
  {
    ssr: false,
  }
);


  


const NewSchoolMidiaMobile = dynamic(
  () => import("../components/mobile/newSchoolMidia"),
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
  () => import("../components/organisms/newSchoolMidia"),
  {
    ssr: false,
  }
);
const NewSchoolBanner = dynamic(
  () => import("../components/organisms/newSchoolBanner"),
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
      
      <MidiaContato />
      <NewSchoolBanner />
      
     
      
      
      
    </>
  );
}
function Mobile() {
  return (
      <>
     
     <NewSchoolMidiaMobile />
      {/*<NewSchoolMidia2 />*/}
      <MidiaContatoMobile />
      
    </>
  );
}
