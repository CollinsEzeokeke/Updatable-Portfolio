import FeaturesSectionDemo from "../blocks/features-section-demo-3";
import FUIBentoGridDark from "./sections/sections";
import Header from "./header/header";
import HeadersList from "../headersList";

export default function LandingPage() {
  return (
    <>
      <Header />
      <FeaturesSectionDemo />
      <FUIBentoGridDark />

      <HeadersList/>
    </>
  );
}
