import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import Modal from 'react-modal';
import Image from "next/image";

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',    
    transform: 'translate(-50%, -50%)',
    padding: '0px'
  },
};

const customStylesMobile = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',     
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    width: '80%'
  },
};

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
const ParceirosMobile = dynamic(() => import("../components/mobile/Parceiros"), {
  ssr: false,
});
const Apoio = dynamic(() => import("../components/organisms/apoio"), {
  ssr: false,
});
const ApoioMobile = dynamic(() => import("../components/mobile/apoio"), {
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

Modal.setAppElement('#modal-root');

export default function index() {    
  return (
    <>      
      {isMobile ? <Mobile /> : <Desktop />}  
      <div id="modal-root"></div>               
    </>
  );
}
function Desktop() {  
  const [modalIsOpen, setIsOpen] = React.useState(true);

  let subtitle;  

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
    <div>      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Campanha"
        overlayClassName="Overlay"
      >        
        <Image width="650" height="550" src="/campanha.jpeg" />
      </Modal>    
    </div>
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
  const [modalIsOpen, setIsOpen] = React.useState(true);

  let subtitle;  

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
   {/* <div>      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStylesMobile}
        contentLabel="Campanha"
        overlayClassName="Overlay"
      >        
        <Image width="350" height="700" layout="responsive" src="/campanhamobile.jpeg" />
      </Modal>    
    </div>*/}
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