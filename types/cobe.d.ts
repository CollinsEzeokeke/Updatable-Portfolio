// src/types/cobe.d.ts

declare module 'cobe' {
  export interface GlobeState {
    phi: number;
    theta: number;
    width: number;
    height: number;
  }

  export interface GlobeInstance {
    destroy: () => void;
  }

  export interface GlobeConfig {
    devicePixelRatio: number;
    width: number;
    height: number;
    phi: number;
    theta: number;
    dark: number;
    diffuse: number;
    mapSamples: number;
    mapBrightness: number;
    baseColor: [number, number, number];
    markerColor: [number, number, number];
    glowColor: [number, number, number];
    markers: Marker[];
    onRender: (state: GlobeState) => void;
  }

  export interface Marker {
    location: [number, number];
    size: number;
  }

  export default function createGlobe(
    canvas: HTMLCanvasElement,
    config: GlobeConfig
  ): GlobeInstance;
}