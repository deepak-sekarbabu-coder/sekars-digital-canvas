import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Text, Sphere } from '@react-three/drei';

interface SkillOrbProps {
  position: [number, number, number];
  skill: string;
  color: string;
  onClick?: () => void;
}

const SkillOrb = ({ position, skill, color, onClick }: SkillOrbProps) => {
  const orbRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (orbRef.current) {
      const scale = hovered ? 1.2 : clicked ? 0.9 : 1;
      orbRef.current.scale.lerp({ x: scale, y: scale, z: scale } as any, 0.1);
      
      if (!hovered && !clicked) {
        orbRef.current.rotation.y += 0.01;
        orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      }
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={orbRef}
        args={[0.8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
        onClick={onClick}
      >
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.3 : 0}
        />
      </Sphere>
      
      <Text
        position={[0, 0, 0.9]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
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

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 3;
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