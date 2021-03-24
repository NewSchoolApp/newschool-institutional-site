import dynamic from "next/dynamic";
const PolicyPrivacy = dynamic(() => import("../components/atoms/privacy-policy"), {
  ssr: false,
});


export default function PolicyPrivacyPage() {
  return (
    <>
      <PolicyPrivacy />
    </>
  );
}
