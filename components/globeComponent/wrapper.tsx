"use client";
import React, { useRef, useEffect } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

interface WorldGlobeProps {
  width?: number;
  height?: number;
}


const WorldGlobe = ({ width = 200, height = 200 }: WorldGlobeProps) => {
  // Use GlobeMethods type from react-globe.gl
  const globeEl = useRef<GlobeMethods>();

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
  }, []); // Remove dependency array

  return (
    <div
      className="flex items-end absolute top-56"
      style={{ pointerEvents: "none" }}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        ref={globeEl}
        width={width}
        height={height}
        backgroundColor="black"
      />
    </div>
  );
};

export default WorldGlobe;