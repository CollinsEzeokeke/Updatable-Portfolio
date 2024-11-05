// // components/WorldGlobe.tsx
"use client";
import React, { useRef, useEffect, useCallback } from "react";
import Globe from "react-globe.gl";

interface WorldGlobeProps {
  width?: number;
  height?: number;
}

// Dynamically import the Globe component

const WorldGlobe = ({ width = 200, height = 200 }: WorldGlobeProps) => {
  const globeEl = useRef<any>();

  useEffect(() => {
    console.log("useEffect for globe controls");
    const globe = globeEl.current;

    if (globe) {
      console.log("Globe is defined");
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1;
      globe.controls().enableZoom = false;
      globe.controls().minPolarAngle = Math.PI / 2;
      globe.controls().maxPolarAngle = Math.PI / 2;
      globe.controls().enabled = false;
    } else {
      console.log("Globe is not defined");
    }
  }, [globeEl.current]);
  return (
    <div
      className="flex items-end absolute top-56"
      style={{ pointerEvents: "none" }}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Use a more modern globe image
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        ref={useCallback<any>(globeEl, [])}
        width={width}
        height={height}
        backgroundColor="black"
      />
    </div>
  );
};

export default WorldGlobe;
