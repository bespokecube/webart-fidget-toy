import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function SmallDial(props) {
  const { nodes, materials } = useGLTF("/fidget_small_dial.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");

  const meshRef = useRef();

  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { duration: 300, easing: easings.easeInOutQuad },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newRotationX = (meshRef.current.rotation.x += Math.PI / 4);
      api.start({ rotation: [newRotationX, 0, 0] });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cylinder010.geometry}
        position={[-0.507, 0.567, -0.169]}
        rotation={spring.rotation}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#000000' roughness={0.5} roughnessMap={roughnessMap} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_small_dial.glb");
