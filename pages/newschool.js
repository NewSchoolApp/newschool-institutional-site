import dynamic from "next/dynamic";
const Esquilo = dynamic(() => import("../components/organisms/esquilo"), {
  ssr: false,
});

const NewschoolGrafit = dynamic(
  () => import("../components/atoms/newschool-grafit-center"),
  { ssr: false }
);

const OurVision = dynamic(() => import("../components/organisms/ourVision"), {
  ssr: false,
});

const OurValues = dynamic(() => import("../components/organisms/ourValues"), {
  ssr: false,
});

const Carousel = dynamic(() => import("../components/organisms/carousel"), {
  ssr: false,
});

const OurTeam = dynamic(() => import("../components/organisms/ourTeam"), {
  ssr: false,
});

export default function NewSchool() {
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
