import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import developerPng from '../assets/dev_png.png';

const DeveloperModel = () => {
  const groupRef = useRef();
  const texture = useLoader(TextureLoader, developerPng);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <sprite scale={[9, 8, 1]}>
        <spriteMaterial map={texture} transparent={true} />
      </sprite>
    </group>
  );
};

export default DeveloperModel;