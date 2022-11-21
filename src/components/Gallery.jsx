import { Suspense, useRef } from "react";

import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

import "@shaders/WaveShaderMaterial";

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

  return (
    <ScrollControls horizontal pages={2}>
      <Scroll>
        {products.map((i) => (
          <Item key={i} pos={[i * (vW - vW / 1.28 + 2), 0, 0]}  />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

export function Item({ pos }) {
  const shader = useRef();

  useFrame(
    ({ clock }) => (shader.current.uniforms.uTime.value = clock.getElapsedTime())
  );

  const [image] = useLoader(TextureLoader, [
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  ]);

  return (
    <mesh position={pos}>
      <planeGeometry args={[2.5, 3.5, 32, 32]} />
      <waveShaderMaterial attach="material" ref={shader} map={image} />
    </mesh>
  );
}
