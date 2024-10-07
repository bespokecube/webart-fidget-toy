import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function LargeButton(props) {
  const { nodes, materials } = useGLTF("/fidget_button_large.glb");
  const roughnessMap = useTexture("./fidget_roughness.jpg");
  const defaultPositionX = 0.947;

  const meshRef = useRef();

  const [spring, api] = useSpring(() => ({
    position: [defaultPositionX, 0.5, -0.5],
    config: { duration: 100, easing: easings.easeInOutBounce },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newPositonX = meshRef.current.position.x === defaultPositionX ? defaultPositionX - 0.1 : defaultPositionX;
      api.start({ position: [newPositonX, 0.5, -0.5] });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cylinder005.geometry}
        position={spring.position}
        rotation={[0.002, -0.002, -1.572]}
        scale={1.009}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#1F43A1' roughness={0.5} roughnessMap={roughnessMap} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_button_large.glb");
