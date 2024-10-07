import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function Dial(props) {
  const { nodes, materials } = useGLTF("/fidget_dial.glb");
  const roughnessMap = useTexture("./fidget_roughness.jpg");
  const albedo = useTexture("./fidget_albedo.png");

  roughnessMap.flipY = false;
  albedo.flipY = false;

  const meshRef = useRef();

  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { duration: 300, easing: easings.easeInCubic },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newRotationZ = (meshRef.current.rotation.z += Math.PI);
      api.start({ rotation: [0, 0, newRotationZ] });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cylinder.geometry}
        position={[0, 0, 0.96]}
        scale={0.836}
        rotation={spring.rotation}
        onClick={handleClick}
      >
        <meshStandardMaterial roughness={0.5} roughnessMap={roughnessMap} map={albedo} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_dial.glb");
