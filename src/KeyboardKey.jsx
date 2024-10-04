import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function KeyboardKey(props) {
  const { nodes, materials } = useGLTF("/fidget_keyboard_key.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} position={[0.5, -1.03, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color='#117D2F' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_keyboard_key.glb");
