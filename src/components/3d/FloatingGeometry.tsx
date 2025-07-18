import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float } from '@react-three/drei';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}

const FloatingCube = ({ position, color, scale = 1, speed = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color, scale = 1, speed = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.z += 0.004 * speed;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color, scale = 1, speed = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.006 * speed;
      meshRef.current.rotation.x += 0.002 * speed;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.2} floatIntensity={0.7}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 8, 24]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const FloatingGeometry = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

      {/* Floating shapes */}
      <FloatingCube position={[-4, 2, -3]} color="#6366f1" scale={0.8} speed={1.2} />
      <FloatingCube position={[4, -1, -4]} color="#8b5cf6" scale={0.6} speed={0.8} />

      <FloatingOctahedron position={[3, 3, -2]} color="#06b6d4" scale={0.7} speed={1.5} />
      <FloatingOctahedron position={[-3, -2, -5]} color="#10b981" scale={0.5} speed={0.9} />

      <FloatingTorus position={[0, -3, -6]} color="#f59e0b" scale={0.4} speed={1.1} />
      <FloatingTorus position={[-5, 1, -3]} color="#ef4444" scale={0.6} speed={0.7} />

      {/* Additional smaller shapes for depth */}
      <FloatingCube position={[6, 0, -8]} color="#6366f1" scale={0.3} speed={1.8} />
      <FloatingOctahedron position={[-6, 4, -7]} color="#8b5cf6" scale={0.4} speed={1.3} />
    </>
  );
};

export default FloatingGeometry;
