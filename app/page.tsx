import LandingPage from "@/components/landingPage/landingPage";
import WorldGlobe from "@/components/globeComponent/wrapper";
export default function Home() {
  return (
    <div className="overflow-hidden">
    {/* <LandingPage/> */}
    <WorldGlobe width={800} height={800} />
    </div>
  );
}
