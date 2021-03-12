import dynamic from "next/dynamic";
const BePart = dynamic(() => import("../components/organisms/be-part"), {
  ssr: false,
});

const OurPartnership = dynamic(
  () => import("../components/organisms/our-partnership"),
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

const Volunteers = dynamic(
  () => import("../components/organisms/volunteers"),
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

export default function JoinUs() {
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
