import Globe from "@/components/ui/globe";
import Navbar from "./navBar";

export default function Header() {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <Navbar />
      <Globe></Globe>
    </div>
  );
}
