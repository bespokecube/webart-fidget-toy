import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Dial(props) {
  const { nodes, materials } = useGLTF("/fidget_dial.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} position={[0, 0, 0.96]} scale={0.836}>
        <meshStandardMaterial color='#C89600' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_dial.glb");
