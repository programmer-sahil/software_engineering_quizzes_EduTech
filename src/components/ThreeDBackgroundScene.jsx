import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, Torus, Trail } from '@react-three/drei';
import { useRef } from 'react';

function OrbitalElements() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <Sphere args={[0.8, 32, 32]} position={[-1.8, 0.5, -1]}>
          <meshStandardMaterial color="#22d3ee" roughness={0.2} metalness={0.4} />
        </Sphere>
      </Float>

      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.8}>
        <Torus args={[1.1, 0.08, 32, 180]} position={[1.4, -0.2, -1.3]}>
          <meshStandardMaterial color="#fb7185" roughness={0.3} metalness={0.6} />
        </Torus>
      </Float>

      <Trail width={0.25} color="#38bdf8" length={5} decay={2} attenuation={(t) => t * t}>
        <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
          <Sphere args={[0.2, 20, 20]} position={[0.2, 1.1, -0.5]}>
            <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.8} />
          </Sphere>
        </Float>
      </Trail>
    </group>
  );
}

function ThreeDBackgroundScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-85">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 62 }} dpr={[1, 1.6]}>
        <ambientLight intensity={0.75} />
        <directionalLight intensity={0.9} position={[3, 3, 4]} color="#67e8f9" />
        <pointLight intensity={1.2} position={[-2, -1, 2]} color="#fb7185" />
        <Stars radius={45} depth={30} count={600} factor={2.2} fade speed={0.8} />
        <OrbitalElements />
      </Canvas>
    </div>
  );
}

export default ThreeDBackgroundScene;
