import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Switch(props) {
  const { nodes, materials } = useGLTF("/fidget_switch.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        position={[-0.927, 0, 0.62]}
        rotation={[0, 0, -0.148]}
        scale={[1.05, 1.0, 1.05]}
      >
        <meshStandardMaterial color='#CF0B0E' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_switch.glb");
