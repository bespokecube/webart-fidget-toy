import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function LargeButton(props) {
  const { nodes, materials } = useGLTF("/fidget_button_large.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        position={[0.947, 0.5, -0.5]}
        rotation={[0.002, -0.002, -1.572]}
        scale={1.009}
      >
        <meshStandardMaterial color='#1F43A1' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_button_large.glb");
