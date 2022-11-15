import { Suspense, useRef, useState } from "react";

import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";

import { TextureLoader } from "three";

export default function Gallery() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera />
        <ambientLight intensity={1} />
        <Items />
      </Suspense>
    </Canvas>
  );
}

export function Items({ w = 2.5, h = 3.5, gap = 0.4 }) {
  const vW = useThree((state) => state.viewport).width;

  const products = [0, 1, 2];

  const texture = useLoader(TextureLoader, "./test.png");

  return (
    <ScrollControls horizontal pages={2}>
      <Scroll>
        {products.map((i) => (
          <mesh key={i} position={[i * (vW / 5 + gap), 0, 0]}>
            <planeGeometry args={[w, h]} />
            <meshStandardMaterial attach="material" map={texture} />
          </mesh>
        ))}
      </Scroll>
    </ScrollControls>
  );
}
