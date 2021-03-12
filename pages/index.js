import React from "react";
import dynamic from "next/dynamic";

const VideoLoop = dynamic(() => import("../components/atoms/video-loop"), {
  ssr: false,
});
const Presentation = dynamic(
  () => import("../components/organisms/presentation"),
  { ssr: false }
);
const Values = dynamic(() => import("../components/organisms/values"), {
  ssr: false,
});
const NewSchoolGrafit = dynamic(
  () => import("../components/atoms/newschool-grafit"),
  { ssr: false }
);
const BelieveUs = dynamic(() => import("../components/organisms/believe-us"), {
  ssr: false,
});
const AboutUs = dynamic(() => import("../components/organisms/about-us"), {
  ssr: false,
});
const GoTop = dynamic(() => import("../components/atoms/go-top"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <VideoLoop id="top" />
      <Presentation />
      <NewSchoolGrafit />
      <Values />
      <BelieveUs />
      <AboutUs />
      <a href="#top">
        <GoTop />
      </a>
    </>
  );
}
