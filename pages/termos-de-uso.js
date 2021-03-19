import dynamic from "next/dynamic";
const TermsOfUse = dynamic(() => import("../components/atoms/terms-of-use"), {
  ssr: false,
});


export default function TermsOfUsePage() {
  return (
    <>
      <TermsOfUse />
    </>
  );
}
