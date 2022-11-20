import { Suspense, useRef, useState } from "react";

import {
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  shaderMaterial,
} from "@react-three/drei";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";

import { Color, Texture, TextureLoader } from "three";

const WaveShaderMaterial = shaderMaterial({}, ``, ``);

extend({ WaveShaderMaterial });

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

export function Items() {
  const vW = useThree((state) => state.viewport).width;

  const products = [0, 1, 2];

  const texture = useLoader(TextureLoader, "./test.png");

  return (
    <ScrollControls horizontal pages={2}>
      <Scroll>
        {products.map((i) => (
          <mesh key={i} position={[i * (vW - vW / 1.3 + 2), 0, 0]}>
            <planeGeometry args={[2.5, 3.5, 32, 32]} />
          </mesh>
        ))}
      </Scroll>
    </ScrollControls>
  );
}
