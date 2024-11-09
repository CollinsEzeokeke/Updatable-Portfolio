import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ParticlesWrapper } from "@/components/ParticlesWrapper"; // Make sure this path is correct
import TanStackProvider from "@/Providers/TanStackProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Collins Ezeokeke",
  description: "The Fat-end developer. I am a versatile full-stack developer specializing in modern web technologies and blockchain development. With my deep understanding of both front-end and back-end development, I craft robust, scalable solutions that bridge traditional web applications with blockchain innovation and I am also an AI enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden text-white`}
      >
        <ParticlesWrapper
          className="absolute inset-0 -z-10"
          quantity={100}
          staticity={50}
          ease={50}
          color="#FFFFFF"
        >
          <TanStackProvider>{children}</TanStackProvider>
        </ParticlesWrapper>
      </body>
    </html>
  );
}
