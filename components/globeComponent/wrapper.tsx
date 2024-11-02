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

  // Memoize points data to prevent unnecessary re-renders
  const pointsData = useRef([
    { lat: 51.5074, lng: -0.1278, name: "London" },
    { lat: 40.7128, lng: -74.0060, name: "New York" }
  ]).current;

  // Configure globe settings
  const configureGlobe = useCallback(() => {
    if (!globeRef.current || hasInitialized.current) return;

    try {
      hasInitialized.current = true;

      globeRef.current.pointOfView({
        lat: 39.6,
        lng: -98.5,
        altitude: 2
      }, 1000);

      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 3.0;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = false;
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
        controls.minAzimuthAngle = -Infinity;
        controls.maxAzimuthAngle = Infinity;
        controls.enabled = false;
      }
    } catch (error) {
      console.error("Error configuring globe:", error);
    }
  }, []);

  // Handle globe initialization
  useEffect(() => {
    let mounted = true;

    if (isGlobeReady && mounted) {
      configureGlobe();
    }

    return () => {
      mounted = false;
    };
  }, [isGlobeReady, configureGlobe]);

  // Memoize globe ready handler
  const handleGlobeReady = useCallback(() => {
    setIsGlobeReady(true);
  }, []);

  // Memoize globe props to prevent unnecessary re-renders
  const globeProps = {
    width,
    height,
    globeImageUrl: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    bumpImageUrl: "//unpkg.com/three-globe/example/img/earth-topology.png",
    backgroundColor: "rgba(0,0,0,0)",
    atmosphereColor: "#ffffff",
    pointsData,
    pointLabel: "name",
    pointRadius: 0.5,
    pointColor: () => "transparent",
    enablePointerInteraction: false,
  };

  return (
    <div 
      className="flex items-end absolute top-56" 
      style={{ pointerEvents: 'none' }}
    >
      <Globe
        ref={globeRef}
        {...globeProps}
        onGlobeReady={handleGlobeReady}
      />
    </div>
  );
};

export default WorldGlobe;