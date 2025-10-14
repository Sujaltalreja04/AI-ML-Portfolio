import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

export const RotatingLogo = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <mesh>
          <torusKnotGeometry args={[1.5, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#808080"
            metalness={0.9}
            roughness={0.1}
            emissive="#404040"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Center>

      <pointLight position={[2, 2, 2]} intensity={1} color="#c0c0c0" />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#808080" />

      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 3;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            scale={0.3}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#a0a0a0"
              emissive="#606060"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
};
