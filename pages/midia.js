import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";





const MidiaContato = dynamic(
  () => import("../components/organisms/midiaContato"),
  {
    ssr: false,
  }
);

const MidiaStilo = dynamic(
  () => import("../components/organisms/midiaStilo"),
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
      <MidiaStilo/>  
      <NewSchoolMidia />      
      <MidiaContato />  
        
    </>
  );
}
function Mobile() {
  return (
      <>
    
     <NewSchoolMidiaMobile />
     <MidiaContatoMobile />
      
    </>
  );
}
