// components/TopAbout.tsx
"use client"
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import WonderfulCard from "@/components/wonderfulCards";
import "@/styles/resumeAnimation.css"
import ButtonBlock from "@/components/buttonedComponent";
import { useAboutImage } from "@/hooks/useAboutImage";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { MarqueeDemo } from "@/components/marqueeUse";
import { PinContainer } from "@/components/ui/3d-pin";


// Loading Component
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        {/* <p className="mt-4 text-white">Loading content...</p> */}
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-2xl px-4 py-8 mx-auto text-center">
        <svg
          className="w-16 h-16 mx-auto text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="text-2xl font-bold mb-2">No Content Available</h3>
        <p className="text-gray-400">
          We couldn&apos;t find any header content to display at the moment
        </p>
      </div>
    </div>
  );
};



const TopAbout = () => {
  const { data: imageData, isLoading } = useAboutImage()
  if (isLoading) {
    return <LoadingSpinner />;
  }


  if (!imageData || imageData._type !== "Image") {
    return <EmptyState />;
  }

const image = imageData

console.log(image)

  return (
    <div className="flex justify-around items-center h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <WonderfulCard>
        <div className="w-full h-full bg-[#171717] transition-all duration-1000 ease-in-out clip-path-polygon flex flex-col rounded-tr-[20px] rounded-bl-[20px] justify-around opacity-100">
          {/* Profile Image */}
          <PinContainer className="w-60 h-60  rounded-[15px] mx-auto" title="send me an email" href="mailto:collinsmecosy@gmail.com">
          <Image src={urlFor(image.Image.asset._ref).url()} alt={image.Image.alt} width={300} height={300} className="rounded-full"/>
          </PinContainer>

          {/* Title */}
          <span className="font-bold text-white text-center text-3xl">
            About Me
          </span>

          {/* Description */}
          <p className="text-white text-center text-[0.72em] m-4 font-normal text-2xl">
            I am Collins Ezeokeke, a versatile full-stack developer specializing
            in modern web technologies and blockchain development. With my deep
            understanding of both front-end and back-end development, I craft
            robust, scalable solutions that bridge traditional web applications
            with blockchain innovation.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-[#4F46E5] transition-colors duration-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <ButtonBlock />
        </div>
      </WonderfulCard>

      <MarqueeDemo />
    </div>
  );
};

// Social media links data
const socialLinks = [
  {
    name: "github",
    href: "#",
    icon: <IconBrandGithub />,
  },
  {
    name: "twitter",
    href: "#",
    icon: <IconBrandX />,
  },
  {
    name: "github",
    href: "#",
    icon: <IconBrandInstagram />,
  },
  {
    name: "github",
    href: "#",
    icon: <IconBrandFacebook />,
  },
  {
    name: "whatsapp",
    href: "wa.me+2348132500912",
    icon: <IconBrandWhatsapp />,
  },
];

export default TopAbout;
