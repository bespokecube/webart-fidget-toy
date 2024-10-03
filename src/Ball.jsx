import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Ball(props) {
  const { nodes, materials } = useGLTF("/fidget_ball.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Icosphere.geometry} position={[0, 0, -0.535]} scale={0.777}>
        <meshStandardMaterial color='#A0A0A0' roughness={0.5} roughnessMap={roughnessMap} metalness={1} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_ball.glb");
