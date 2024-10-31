"use client";

import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import { ReactNode } from "react";

// Define the props interface including children
interface ParticlesWrapperProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
  children: ReactNode; // Explicitly type children as ReactNode
}

const DynamicParticles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
  loading: () => <Loading />,
  // loading: () => <div>Loading....</div>,
});

// Use the interface in the component definition
export function ParticlesWrapper({
  children,
  ...props
}: ParticlesWrapperProps) {
  return <DynamicParticles {...props}>{children}</DynamicParticles>;
}
