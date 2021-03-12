import dynamic from "next/dynamic";
const BePart = dynamic(() => import("../components/organisms/be-part"), {
  ssr: false,
});

const OurPartnership = dynamic(() => import("../components/organisms/ourPar"), {
  ssr: false,
});

export default function JoinUs() {
  return (
    <>
      <BePart />
    </>
  );
}
