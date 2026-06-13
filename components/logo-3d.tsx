'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center, Bounds, Clone } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';

function LogoModel() {
  const { scene } = useGLTF('/models/Agronomist logo 3d.glb');
  const groupRef = useRef<THREE.Group>(null);

  // Apply some glossy/metallic textures to make it pop if it has basic materials
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        mesh.material.roughness = 0.1;
        mesh.material.metalness = 0.8;
      }
    }
  });

  // Slow continuous rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Automatically center and scale the model to fit the camera view */}
      <Bounds fit clip observe margin={1.1}>
        <Center>
          <Clone object={scene} />
        </Center>
      </Bounds>
    </group>
  );
}

export function Logo3D({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Fallback image while 93MB model loads */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/logo.png" alt="Loading Logo" fill className="object-contain opacity-50 animate-pulse" />
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }} dpr={[1, 2]}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          <Environment preset="studio" />
          <LogoModel />
        </Canvas>
      </Suspense>
    </div>
  );
}

// Preload to ensure it's ready quickly if possible
useGLTF.preload('/models/Agronomist logo 3d.glb');
