import WorldGlobe from "@/components/globeComponent/wrapper";
import { FlipWords } from "@/components/ui/flip-words";

const words = ["blockchain technology", "modern web applications", "mobile applications"]

export default function HeaderContent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white font-bold">
      <div className="h-96 w-screen flex flex-col justify-start items-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Building Digital Solutions Across the Globe
        </h1>
        <div className="text-xl max-w-2xl text-center leading-relaxed opacity-90 relative z-30 top-14">
          Full-stack developer specializing in building<FlipWords words={words} className="text-white" />
        </div>
      </div>
      <WorldGlobe width={600} height={600}/>
    </div>
  );
}