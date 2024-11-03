// components/WorldGlobe.tsx
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "./GlobeWrapper";
import type { GlobeMethods } from 'react-globe.gl';

interface WorldGlobeProps {
  width?: number;
  height?: number;
}

const WorldGlobe = ({ width = 200, height = 200 }: WorldGlobeProps) => {
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

    // Configure controls with restricted movement
    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 3.0;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.minPolarAngle = Math.PI / 2; // Lock vertical rotation
      controls.maxPolarAngle = Math.PI / 2;
      controls.minAzimuthAngle = -Infinity; // Allow only horizontal rotation
      controls.maxAzimuthAngle = Infinity;
<<<<<<< Updated upstream
      controls.enabled = false; // Disable all manual controls
=======
      controls.enabled = true; // Disable all manual controls
>>>>>>> Stashed changes
    }
  }, []);

  useEffect(() => {
    if (isGlobeReady) {
      configureGlobe();
    }
  }, [isGlobeReady, configureGlobe]);

  const handleGlobeReady = useCallback(() => {
    setIsGlobeReady(true);
  }, []);

  const pointsData = [
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 40.7128, lng: -74.0060, name: "New York" }
  ];

  return (
    <div className="flex items-end absolute top-56" style={{ pointerEvents: 'none' }}>
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
        pointColor={() => "transparent"}
        enablePointerInteraction={false}
      />
    </div>
  );
};

export default WorldGlobe;