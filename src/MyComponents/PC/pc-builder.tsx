"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Html } from "@react-three/drei"
import { Vector3, Mesh, type Group, MathUtils } from "three"
import { PartType, type Part } from "@/lib/types"

// Props for our PC Builder component - we need to know what parts are selected
// and which part (if any) is currently animating into place
interface PCBuilderProps {
  selectedParts: Record<PartType, Part | null>
  activeAnimation: {
    partType: PartType | null
    isAnimating: boolean
  }
}

// Main component that sets up our 3D scene with a PC case
export default function PCBuilder({ selectedParts, activeAnimation }: PCBuilderProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      {/* Black background for that techy look */}
      <color attach="background" args={["#000000"]} />
      
      {/* Basic lighting setup - we need multiple lights for good visibility */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Environment preset gives us nice reflections on metallic surfaces */}
      <Environment preset="city" />

      {/* The actual PC case with all its components */}
      <PCCase selectedParts={selectedParts} activeAnimation={activeAnimation} />
      
      {/* Let users rotate and zoom the scene */}
      <OrbitControls enablePan={false} minDistance={3} maxDistance={8} enableDamping />
    </Canvas>
  )
}

// Component for the PC case itself
function PCCase({ selectedParts, activeAnimation }: PCBuilderProps) {
  const group = useRef<Group>(null)
  const { camera } = useThree()

  // Start with the case slightly angled for a better viewing angle
  useEffect(() => {
    if (group.current) {
      group.current.rotation.y = Math.PI / 6
    }
  }, [])

  // Add a subtle floating animation to make the scene feel more dynamic
  useFrame((state) => {
    if (group.current) {
      // Slight rotation based on time creates a gentle swaying effect
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05 + Math.PI / 6
    }
  })

  return (
    <group ref={group}>
      {/* Main PC case structure - the outer shell */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 1.5]} />
        {/* Dark metallic finish with some transparency */}
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} transparent opacity={0.7} />

        {/* Glass side panel  */}
        <mesh position={[1.51, 0, 0]}>
          <planeGeometry args={[1.5, 4]} />
          {/* Physical material for realistic glass with transmission */}
          <meshPhysicalMaterial
            color="#8884"
            metalness={0.1}
            roughness={0}
            transparent
            opacity={0.3}
            transmission={0.9}
          />
        </mesh>

        {/* Interior purple lighting for that gaming PC aesthetic */}
        <pointLight position={[0, 0, 0]} intensity={1} color="#5f27cd" />
      </mesh>

      {/* Component slots arranged in typical PC layout */}
      <ComponentSlot
        position={[0, 1, 0]}
        name="CPU"
        type={PartType.CPU}
        selectedParts={selectedParts}
        activeAnimation={activeAnimation}
      />

      <ComponentSlot
        position={[0, -0.5, 0]}
        name="GPU"
        type={PartType.GPU}
        selectedParts={selectedParts}
        activeAnimation={activeAnimation}
      />

      <ComponentSlot
        position={[0, 0.25, 0.5]}
        name="RAM"
        type={PartType.RAM}
        selectedParts={selectedParts}
        activeAnimation={activeAnimation}
      />

      {/* Motherboard background - the surface everything mounts to */}
      <mesh position={[-0.5, 0, -0.5]} receiveShadow>
        <planeGeometry args={[2, 3.5]} />
        <meshStandardMaterial color="#232323" />
      </mesh>

      {/* circuit lines for futuristic feel */}
      <CircuitLines />
    </group>
  )
}

// Props for each component slot in the PC
interface ComponentSlotProps {
  position: [number, number, number]
  name: string
  type: PartType
  selectedParts: Record<PartType, Part | null>
  activeAnimation: {
    partType: PartType | null
    isAnimating: boolean
  }
}

// Individual slot where a PC component can be installed
function ComponentSlot({ position, name, type, selectedParts, activeAnimation }: ComponentSlotProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const part = selectedParts[type]
  const isAnimating = activeAnimation.partType === type && activeAnimation.isAnimating

  // Animation for hover effects - makes the slot pulse when mouse is over it
  useFrame((state) => {
    if (meshRef.current) {
      if (hovered) {
        // Pulsing scale effect using sine wave
        meshRef.current.scale.x = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.05
        meshRef.current.scale.y = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.05
        meshRef.current.scale.z = 1 + Math.sin(state.clock.getElapsedTime() * 5) * 0.05
      } else {
        // Smoothly return to normal size when not hovered
        meshRef.current.scale.x = MathUtils.lerp(meshRef.current.scale.x, 1, 0.1)
        meshRef.current.scale.y = MathUtils.lerp(meshRef.current.scale.y, 1, 0.1)
        meshRef.current.scale.z = MathUtils.lerp(meshRef.current.scale.z, 1, 0.1)
      }
    }
  })

  return (
    <group position={position}>
      {/* The slot itself changes color when part is installed or at least its supposedd to */}
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <boxGeometry args={[1, 0.5, 0.2]} />
        <meshStandardMaterial
          color={part ? "#5f27cd" : "#333333"}
          emissive={part ? "#5f27cd" : hovered ? "#444444" : "#000000"}
          emissiveIntensity={part ? 0.5 : hovered ? 0.3 : 0}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Label beneath the slot showing what type of component goes here */}
      <Html position={[0, -0.4, 0]} center>
        <div className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded-full">{name}</div>
      </Html>

      {/* Show the actual component if one is selected for this slot */}
      {part && <PartVisualization part={part} isAnimating={isAnimating} slotPosition={position} />}
    </group>
  )
}

// Props for visualizing an individual PC part
interface PartVisualizationProps {
  part: Part
  isAnimating: boolean
  slotPosition: [number, number, number]
}

// Component to show the actual PC part and handle its animation
function PartVisualization({ part, isAnimating, slotPosition }: PartVisualizationProps) {
  const meshRef = useRef<Mesh>(null)
  const [animationProgress, setAnimationProgress] = useState(0)

  // Define start and end positions for the flying animation
  const startPosition = new Vector3(5, 2, 2) // Off-screen starting point
  const targetPosition = new Vector3(...slotPosition) // Final slot position

  // Reset animation when it starts
  useEffect(() => {
    if (isAnimating) {
      setAnimationProgress(0)
    }
  }, [isAnimating])

  // Handle the flying-in animation
  useFrame(() => {
    if (meshRef.current) {
      if (isAnimating && animationProgress < 1) {
        // Gradually increase progress from 0 to 1
        setAnimationProgress((prev) => Math.min(prev + 0.02, 1))

        // Smoothly insert between start and end positions (but it doesnt.. still a work in progress)
        const newPosition = new Vector3().lerpVectors(startPosition, targetPosition, animationProgress)
        meshRef.current.position.copy(newPosition)

        // Spin the part as it flies in for visual interest
        meshRef.current.rotation.y += 0.05
      } else if (!isAnimating) {
        // When not animating, keep part in its slot
        meshRef.current.position.copy(targetPosition)
        meshRef.current.position.z += 0.2 // Float slightly in front of the slot
      }
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={isAnimating ? startPosition.toArray() : [slotPosition[0], slotPosition[1], slotPosition[2] + 0.2]}
    >
      {/* Simple box geometry to represent the part */}
      <boxGeometry args={[0.8, 0.4, 0.1]} />
      <meshStandardMaterial color={part.color || "#5f27cd"} metalness={0.9} roughness={0.1} />

      {/* Text label on the part showing its name */}
      <Text position={[0, 0, 0.06]} fontSize={0.08} color="#ffffff" anchorX="center" anchorY="middle">
        {part.name}
      </Text>
    </mesh>
  )
}

// Decorative circuit lines for futuristic motherboard effect
function CircuitLines() {
  const linesRef = useRef<Group>(null)

  // Animate the circuit lines with a pulsing effect
  useFrame((state) => {
    if (linesRef.current) {
      const t = state.clock.getElapsedTime()
      // Make each line pulse with different timing
      linesRef.current.children.forEach((line, i) => {
        if (line instanceof Mesh) {
          line.material.opacity = 0.3 + Math.sin(t + i * 0.5) * 0.2
        }
      })
    }
  })

  return (
    <group ref={linesRef}>
      {/* Create 15 random circuit lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh key={i} position={[-0.5 + Math.random() * 1, -1.5 + Math.random() * 3, -0.4]}>
          {/* Random length boxes to simulate circuit traces */}
          <boxGeometry args={[0.05 + Math.random() * 0.5, 0.01, 0.01]} />
          {/* Randomly blue or purple for variety */}
          <meshBasicMaterial color={Math.random() > 0.5 ? "#5f27cd" : "#0abde3"} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}