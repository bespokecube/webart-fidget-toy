import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function KeyboardKey(props) {
  const { nodes, materials } = useGLTF("/fidget_keyboard_key.glb");
  const roughnessMap = useTexture("./fidget_roughness.jpg");

  const meshRef = useRef();
  const defaultPositionY = -1.05;
  const pressedPositionY = defaultPositionY + 0.04;

  const [spring, api] = useSpring(() => ({
    position: [0.5, defaultPositionY, 0.5],
    config: { duration: 100, easing: easings.easeInBounce },
  }));

  const handleClick = e => {
    e.stopPropagation();

    api.start({ position: [0.5, pressedPositionY, 0.5] });

    setTimeout(() => {
      api.start({ position: [0.5, defaultPositionY, 0.5] });
    }, 100);
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cube002.geometry}
        position={spring.position}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#117D2F' roughness={0.5} roughnessMap={roughnessMap} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_keyboard_key.glb");
