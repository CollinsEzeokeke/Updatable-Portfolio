// import React from "react";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { IconBrandYoutubeFilled } from "@tabler/icons-react";
// import Link from "next/link";

// export function FeaturesSectionDemo() {
//   const features = [
//     {
//       title: "Track issues effectively",
//       description:
//         "Track and manage your project issues with ease using our intuitive interface.",
//       skeleton: <SkeletonOne />,
//       className:
//         "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
//     },
//     {
//       title: "Capture pictures with AI",
//       description:
//         "Capture stunning photos effortlessly using our advanced AI technology.",
//       skeleton: <SkeletonTwo />,
//       className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
//     },
//     {
//       title: "Watch our AI on YouTube",
//       description:
//         "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
//       skeleton: <SkeletonThree />,
//       className:
//         "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
//     },
//     {
//       title: "Deploy in seconds",
//       description:
//         "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
//       skeleton: <SkeletonFour />,
//       className: "col-span-1 lg:col-span-3 border-b lg:border-none",
//     },
//   ];
//   return (
//     <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
//       <div className="px-8">
//         <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
//           Packed with thousands of features
//         </h4>

//         <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
//           From Image generation to video generation, Everything AI has APIs for
//           literally everything. It can even create this website copy for you.
//         </p>
//       </div>

//       <div className="relative ">
//         <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
//           {features.map((feature) => (
//             <FeatureCard key={feature.title} className={feature.className}>
//               <FeatureTitle>{feature.title}</FeatureTitle>
//               <FeatureDescription>{feature.description}</FeatureDescription>
//               <div className=" h-full w-full">{feature.skeleton}</div>
//             </FeatureCard>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const FeatureCard = ({
//   children,
//   className,
// }: {
//   children?: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
//       {children}
//     </div>
//   );
// };

// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm md:text-base  max-w-4xl text-left mx-auto",
//         "text-neutral-500 text-center font-normal dark:text-neutral-300",
//         "text-left max-w-sm mx-0 md:text-sm my-2"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const SkeletonOne = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           {/* TODO */}
//           <Image
//             src="/linear.webp"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonThree = () => {
//   return (
//     <Link
//       href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
//       target="__blank"
//       className="relative flex gap-10  h-full group/image"
//     >
//       <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
//           {/* TODO */}
//           <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
//           <Image
//             src="https://assets.aceternity.com/fireship.jpg"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// };

// export const SkeletonTwo = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   const imageVariants = {
//     whileHover: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//     whileTap: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//   };
//   return (
//     <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
//       {/* TODO */}
//       <div className="flex flex-row -ml-20">
//         {images.map((image, idx) => (
//           <motion.div
//             variants={imageVariants}
//             key={"images-first" + idx}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         {images.map((image, idx) => (
//           <motion.div
//             key={"images-second" + idx}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             variants={imageVariants}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt="bali images"
//               width="500"
//               height="500"
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//             />
//           </motion.div>
//         ))}
//       </div>

//       <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r dark:from-black to-transparent  h-full pointer-events-none" />
//       <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l dark:from-black  to-transparent h-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonFour = () => {
//   return (
//     <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
//       <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
//     </div>
//   );
// };

// export const Globe = ({ className }: { className?: string }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let phi = 0;

//     if (!canvasRef.current) return;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.01;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//       className={className}
//     />
//   );
// };

"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export default function FUIBentoGridDark() {
  return (
    <div className="pt-32 container mx-auto">
      <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl text-white">
        Sales
      </h1>
      <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-gradient-to-br bg-clip-text text-transparent to-white/40">
        Know more about your customers than they do.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="PerkAI uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/ghyfFEStl6BNusZl0ZQd5r7JpM.png)] object-fill" />
          }
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/7CJtT0Pu3w1vNADktNltoMFC9J4.png)] object-fill" />
          }
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="absolute  inset-0 -top-20 -left-60 bg-[url(https://framerusercontent.com/images/gR21e8Wh6l3pU6CciDrqt8wjHM.png)] object-scale-down" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={
            <div className="absolute inset-0 bg-[url(https://framerusercontent.com/images/PTO3RQ3S65zfZRFEGZGpiOom6aQ.png)] object-contain" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="PerkAI helps you sell in locations currently under international embargo."
          graphic={
            <div className="absolute inset-0 -top-44 -left-60 bg-[url(https://framerusercontent.com/images/h496iPSwtSnGZwpJyErl6cLWdtE.png)] object-contain" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </div>
  );
}
export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]   shadow-sm ring-1 ring-black/5",
        "bg-gray-800 ring-white/15"
      )}
    >
      <div className="relative h-[29rem] shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b to-50% from-gray-800 from-[-25%] opacity-25" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t to-50% from-gray-800 from-[-25%] opacity-25" />
        )}
      </div>
      <div className="relative p-10  z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl">
        <h1 className="text-white">{eyebrow}</h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
