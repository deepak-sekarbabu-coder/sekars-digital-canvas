import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

interface SkillOrbProps {
  position: [number, number, number];
  skill: string;
  color: string;
  onClick?: () => void;
}

const SkillOrb = ({ position, skill, color, onClick }: SkillOrbProps) => {
  // Defensive: skip rendering if skill or color is missing
  if (!skill || !color) {
    if (import.meta.env.DEV) {
      console.warn('SkillOrb: Missing skill or color', { skill, color });
    }
    return null;
  }
  const orbRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (orbRef.current) {
      const scale = hovered ? 1.2 : clicked ? 0.9 : 1;
      orbRef.current.scale.lerp({ x: scale, y: scale, z: scale } as any, 0.1);

      if (!hovered && !clicked) {
        orbRef.current.rotation.y += 0.01;
        orbRef.current.position.y =
          position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={orbRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
        onClick={onClick}
      >
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </mesh>

      <Text position={[0, 0, 0.9]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
        {skill}
      </Text>
    </group>
  );
};

interface InteractiveSkillsOrbProps {
  skills: Array<{ name: string; color: string }>;
  onSkillClick?: (skill: string) => void;
}

const InteractiveSkillsOrb = ({ skills, onSkillClick }: InteractiveSkillsOrbProps) => {
  const groupRef = useRef<any>(null);

  // Defensive: ensure skills is a non-empty array
  if (!Array.isArray(skills) || skills.length === 0) {
    if (import.meta.env.DEV) {
      console.warn('InteractiveSkillsOrb: skills prop is empty or not an array', skills);
    }
    return null;
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        if (!skill || typeof skill.name !== 'string' || typeof skill.color !== 'string') {
          if (import.meta.env.DEV) {
            console.warn('InteractiveSkillsOrb: Malformed skill entry', skill);
          }
          return null;
        }
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 5; // Increased spacing between bubbles
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 2) * 0.5;

        return (
          <SkillOrb
            key={skill.name}
            position={[x, y, z]}
            skill={skill.name}
            color={skill.color}
            onClick={() => onSkillClick?.(skill.name)}
          />
        );
      })}
    </group>
  );
};

export default InteractiveSkillsOrb;
