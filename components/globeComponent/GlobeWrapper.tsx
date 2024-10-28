// components/GlobeWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { ForwardedRef, forwardRef } from "react";
import type { GlobeMethods } from 'react-globe.gl';

const GlobeTmpl = dynamic(() => import("react-globe.gl"), { 
  ssr: false,
  loading: () => <div>Loading Globe...</div>
});

interface GlobeProps {
  width?: number;
  height?: number;
  globeImageUrl?: string;
  bumpImageUrl?: string;
  backgroundColor?: string;
  atmosphereColor?: string;
  onGlobeReady?: () => void;
  pointsData?: Array<{ lat: number; lng: number; name: string; }>;
  pointLabel?: string;
  pointRadius?: number;
  pointColor?: () => string;
}

const Globe = forwardRef((props: GlobeProps, ref: ForwardedRef<GlobeMethods>) => {
  return <GlobeTmpl {...props} ref={ref} />;
});

Globe.displayName = "Globe";

export default Globe;