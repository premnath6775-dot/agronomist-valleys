'use client';

import React, { Suspense, useMemo, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Physics, RigidBody, CuboidCollider, InstancedRigidBodies } from '@react-three/rapier';
import { Environment, ContactShadows, Loader } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';
import { useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

// The Tomato component using the uploaded OBJ model
function TomatoModel({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  // Load the OBJ
  const obj = useLoader(OBJLoader, '/models/uploads_files_5545752_tomato_oshinchan_model_v.20240922.0.obj');
  
  // The OBJ geometry
  const geometry = useMemo(() => {
    let geo: THREE.BufferGeometry | null = null;
    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        geo = (child as THREE.Mesh).geometry;
      }
    });
    return geo;
  }, [obj]);

  const scale = 0.05 + Math.random() * 0.02; // Adjust scale depending on OBJ size
  
  return (
    <RigidBody colliders="hull" position={position} rotation={rotation} restitution={0.6} friction={0.4} mass={1}>
      {geometry ? (
        <mesh castShadow receiveShadow scale={scale} geometry={geometry}>
          <meshPhysicalMaterial 
            color="#e51a00" 
            roughness={0.15} 
            metalness={0.05} 
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      ) : (
        <mesh castShadow receiveShadow scale={scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial color="#e51a00" roughness={0.15} clearcoat={1} />
        </mesh>
      )}
    </RigidBody>
  );
}

function Boundaries() {
  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" position={[0, -10, 0]}>
        <CuboidCollider args={[50, 1, 50]} />
      </RigidBody>
      {/* Left Wall */}
      <RigidBody type="fixed" position={[-15, 0, 0]}>
        <CuboidCollider args={[1, 50, 50]} />
      </RigidBody>
      {/* Right Wall */}
      <RigidBody type="fixed" position={[15, 0, 0]}>
        <CuboidCollider args={[1, 50, 50]} />
      </RigidBody>
      {/* Front Wall */}
      <RigidBody type="fixed" position={[0, 0, 5]}>
        <CuboidCollider args={[50, 50, 1]} />
      </RigidBody>
      {/* Back Wall */}
      <RigidBody type="fixed" position={[0, 0, -15]}>
        <CuboidCollider args={[50, 50, 1]} />
      </RigidBody>
    </>
  );
}

// Environment controller for smooth HDRI transitions
function DynamicEnvironment() {
  const { scrollYProgress } = useScroll();
  const [preset, setPreset] = useState<'city' | 'park' | 'forest' | 'sunset'>('city');
  const [intensity, setIntensity] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setPreset('city');
      setIntensity(1);
    } else if (latest < 0.5) {
      setPreset('park');
      setIntensity(0.8);
    } else if (latest < 0.75) {
      setPreset('forest');
      setIntensity(0.6);
    } else {
      setPreset('sunset');
      setIntensity(1.2);
    }
  });

  return (
    <Environment 
      preset={preset} 
      background={false} // don't render background HDRI image, just reflections
      environmentIntensity={intensity}
    />
  );
}

function Scene() {
  const tomatoes = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20, 
        15 + Math.random() * 40, 
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number]
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
      <directionalLight position={[-10, -10, -10]} intensity={0.2} color="#bef264" />
      
      {/* Scroll-based dynamic HDRI transitions */}
      <DynamicEnvironment />
      
      <Physics gravity={[0, -9.81, 0]}>
        {tomatoes.map((t) => (
          <TomatoModel key={t.id} position={t.position} rotation={t.rotation} />
        ))}
        <Boundaries />
      </Physics>

      <ContactShadows position={[0, -9.9, 0]} opacity={0.7} scale={50} blur={2} far={10} color="#000" />
    </>
  );
}

export function SceneBackground() {
  const { scrollYProgress } = useScroll();
  
  // Smoothly transition the background color based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#050505', '#1a1a1a', '#0f172a', '#2d1b11'] // Transitions to match HDRI vibes
  );

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas shadows camera={{ position: [0, 0, 25], fov: 45 }}>
          {/* Interpolated Background Color */}
          <color attach="background" args={['#050505']} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      {/* 3D Loading Screen Overlay */}
      <Loader 
        containerStyles={{ background: '#050505' }}
        innerStyles={{ width: '300px' }}
        barStyles={{ height: '4px', background: '#bef264' }}
        dataStyles={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}
      />
    </>
  );
}
