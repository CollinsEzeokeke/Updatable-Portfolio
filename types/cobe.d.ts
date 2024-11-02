// types/cobe.d.ts
declare module 'cobe' {
    export interface COBEOptions {
      width: number;
      height: number;
      devicePixelRatio: number;
      phi: number;
      theta: number;
      dark: number;
      diffuse: number;
      mapSamples: number;
      mapBrightness: number;
      baseColor: [number, number, number];
      markerColor: [number, number, number];
      glowColor: [number, number, number];
      markers: Array<{
        location: [number, number];
        size: number;
      }>;
      onRender: (state: { phi: number }) => void;
    }
  
    export default function createGlobe(
      canvas: HTMLCanvasElement,
      options: COBEOptions
    ): {
      destroy: () => void;
    };
  }