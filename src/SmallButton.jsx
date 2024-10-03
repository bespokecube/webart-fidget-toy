import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function SmallButton(props) {
  const { nodes, materials } = useGLTF("/fidget_button_small.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        position={[0.947, 0, 0]}
        rotation={[0.002, -0.002, -1.572]}
        scale={0.65}
      >
        <meshStandardMaterial color='#CF0B0E' roughness={0.5} roughnessMap={roughnessMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/fidget_button_large.glb");
