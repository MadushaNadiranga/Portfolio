import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const TechIcon = ({ model }) => {
  // Check if it's an image (svg/png/jpg)
  const path = model.modelPath || model.imagePath;
  const isImage = /\.(svg|png|jpg|jpeg|gif|webp)$/i.test(path);

  // If it's an image, render it directly
if (isImage) {
    const imageScale = model.imageScale || 1; // Default to 1 (100%) if not specified
    
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={path} 
          alt={model.name}
          className="object-contain"
          style={{ 
            width: `${imageScale * 100}%`, 
            height: `${imageScale * 100}%` 
          }}
        />
      </div>
    );
  }

  // Otherwise, render 3D model
  return <Model3D model={model} />;
};

// Separate component for 3D models
const Model3D = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIcon;