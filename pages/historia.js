import dynamic from "next/dynamic";

const OurHistory = dynamic(() => import("../components/atoms/our-history"), {
  ssr: false,
});
const OurHistoryBackground = dynamic(
  () => import("../components/atoms/our-hisotry-background"),
  {
    ssr: false,
  }
);

const History = dynamic(() => import("../components/organisms/history"), {
  ssr: false,
});
const HistoryVideo = dynamic(
  () => import("../components/organisms/historyVideo"),
  {
    ssr: false,
  }
);

export default function AboutUs() {
  return (
    <>
      <History />
      <OurHistory />
      <OurHistoryBackground />
      <HistoryVideo />
    </>
  );
}
