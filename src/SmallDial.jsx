import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function SmallDial(props) {
  const { nodes, materials } = useGLTF("/fidget_small_dial.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cylinder010.geometry} position={[-0.507, 0.567, -0.169]}>
        <meshStandardMaterial color='#000000' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_small_dial.glb");
