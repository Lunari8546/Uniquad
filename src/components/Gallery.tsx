import { useRef, useState } from "react";

import { PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
// import * as PostProcessing from "@react-three/postprocessing";

import { TextureLoader } from "three";

export default function Gallery() {
  const texture = useLoader(TextureLoader, "./test.png");

  return (
    <Canvas>
      <PerspectiveCamera />
      <ambientLight intensity={1} />
      <ScrollControls horizontal>
        <mesh>
          <planeGeometry args={[2.5, 4]} />
          <meshStandardMaterial attach="material" map={texture} />
        </mesh>
      </ScrollControls>
    </Canvas>
  );
}
