// components/WorldGlobe.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "./GlobeWrapper";
import type { GlobeMethods } from 'react-globe.gl';

interface WorldGlobeProps {
  width?: number;
  height?: number;
}

const WorldGlobe = ({ width = 800, height = 800 }: WorldGlobeProps) => {
  const globeRef = useRef<GlobeMethods>(null);
  const [isGlobeReady, setIsGlobeReady] = useState<boolean>(false);
  const hasInitialized = useRef<boolean>(false);

  const configureGlobe = useCallback(() => {
    if (!globeRef.current || hasInitialized.current) return;

    hasInitialized.current = true;
    
    // Configure initial position
    globeRef.current.pointOfView({
      lat: 39.6,
      lng: -98.5,
      altitude: 2
    }, 1000);

    // Configure controls
    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
    }
  }, []);

  useEffect(() => {
    if (isGlobeReady) {
      configureGlobe();
    }

    return () => {
      if (globeRef.current) {
        const controls = globeRef.current.controls();
        if (controls) {
          controls.autoRotate = false;
        }
      }
      hasInitialized.current = false;
    };
  }, [isGlobeReady, configureGlobe]);

  const handleGlobeReady = useCallback(() => {
    setIsGlobeReady(true);
  }, []);

  const pointsData = [
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 40.7128, lng: -74.0060, name: "New York" }
  ];

  return (
    <div className="globe-container">
      <Globe
        ref={globeRef}
        width={width}
        height={height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="#ffffff"
        onGlobeReady={handleGlobeReady}
        pointsData={pointsData}
        pointLabel="name"
        pointRadius={0.5}
        pointColor={() => "#ff0000"}
      />
    </div>
  );
};

export default WorldGlobe;