import { Suspense, useEffect, useRef, useState } from "react";

import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

import "@shaders/WaveShaderMaterial";

export default function Products() {
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

  const products = [0, 1, 2, 3];

  return (
    <ScrollControls horizontal pages={products.length}>
      <Scroll>
        {products.map((i) => (
          <Item key={i} pos={[i * vW, 0, 0]} />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

export function Item({ pos }) {
  const shader = useRef();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";

    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  useFrame(
    ({ clock }) =>
      (shader.current.uniforms.uTime.value = clock.getElapsedTime())
  );

  const [image] = useLoader(TextureLoader, [
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  ]);

  return (
    <mesh
      position={pos}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[2.5, 3.5, 32, 32]} />
      <waveShaderMaterial attach="material" ref={shader} map={image} />
    </mesh>
  );
}
