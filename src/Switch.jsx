import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export function Switch(props) {
  const { nodes, materials } = useGLTF("/fidget_switch.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");

  const meshRef = useRef();
  const defautRotationZ = 0.148;

  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, defautRotationZ],
    config: { duration: 100 },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newRotationZ = meshRef.current.rotation.z === defautRotationZ ? -defautRotationZ : defautRotationZ;
      api.start({ rotation: [0, 0, newRotationZ] });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cube001.geometry}
        position={[-0.927, 0, 0.62]}
        rotation={spring.rotation}
        scale={[1.05, 1.0, 1.05]}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#CF0B0E' roughness={0.5} roughnessMap={roughnessMap} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_switch.glb");
