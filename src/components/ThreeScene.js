"use client"; // Requiblue for Next.js App Router

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
     
     
      {/* Load PC Case */}
      {/* <PCModel modelPath="/models/pc_case.glb" scale={1.5} /> */}

      {/* Load Components Inside the Case */}
      {/* <PCModel modelPath="/models/gpu.glb" position={[0.5, 1, -1]} scale={0.7} />
      <PCModel modelPath="/models/cpu.glb" position={[0, 1.5, 0]} scale={0.5} />
      <PCModel modelPath="/models/motherboard.glb" position={[0, 0.5, 0]} scale={1} />
      <PCModel modelPath="/models/ram.glb" position={[-0.2, 1.6, 0.3]} scale={0.3} />
      <PCModel modelPath="/models/psu.glb" position={[0, -1, -1]} scale={0.8} /> */}
     
     
     
     
      <OrbitControls />
      <Environment preset="city" />
    </Canvas>
  );
}
