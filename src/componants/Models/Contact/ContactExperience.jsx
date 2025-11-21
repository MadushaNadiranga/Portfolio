import { OrbitControls } from "@react-three/drei";
import Computer from "./Computer";
import { Canvas } from "@react-three/fiber";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Warm ambient glow for cozy atmosphere */}
      <ambientLight intensity={0.3} color="#1a0835" />

      {/* Cyan neon accent light */}
      <directionalLight 
        position={[3, 8, 2]} 
        intensity={2.5} 
        color="#00ffff" 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Magenta fill light */}
      <directionalLight
        position={[-5, 5, 3]}
        intensity={1.8}
        color="#ff00ff"
      />

      {/* Warm monitor glow */}
      <pointLight
        position={[0, 0.5, 1]}
        intensity={1.2}
        color="#4a00e0"
        distance={4}
      />

      {/* Soft blue rim light */}
      <directionalLight
        position={[2, 3, -4]}
        intensity={1.5}
        color="#0077ff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Dark sophisticated floor with subtle reflection */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial 
          color="#0a0a14" 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Subtle grid pattern on floor */}
      <mesh
        receiveShadow
        position={[0, -1.49, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30, 20, 20]} />
        <meshBasicMaterial 
          color="#00ffff"
          transparent
          opacity={0.03}
          wireframe
        />
      </mesh>

      {/* Main model */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>

      {/* Floating particles for atmosphere */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={50}
            array={new Float32Array(Array.from({ length: 150 }, () => (-0.5) * 10))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00ffff"
          size={0.05}
          transparent
          opacity={0.6}
        />
      </points>
    </Canvas>
  );
};

export default ContactExperience;