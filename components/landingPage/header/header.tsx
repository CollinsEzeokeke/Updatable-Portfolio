"use client";
import Navbar from "./navBar";
import HeaderContent from "./headerContent";

export default function Header() {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <Navbar />
      <HeaderContent/>
    </div>
  );
}
