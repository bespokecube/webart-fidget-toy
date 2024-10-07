import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function SmallButton(props) {
  const { nodes, materials } = useGLTF("/fidget_button_small.glb");
  const roughnessMap = useTexture("./fidget_roughness.jpg");
  const defaultPositionX = 0.947;

  const meshRef = useRef();

  const [spring, api] = useSpring(() => ({
    position: [defaultPositionX, 0, 0],
    config: { duration: 100, easing: easings.easeInOutBack },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newPositonX = meshRef.current.position.x === defaultPositionX ? defaultPositionX - 0.06 : defaultPositionX;
      api.start({ position: [newPositonX, 0, 0] });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Cylinder008.geometry}
        position={spring.position}
        rotation={[0.002, -0.002, -1.572]}
        scale={0.65}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#CF0B0E' roughness={0.5} roughnessMap={roughnessMap} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_button_large.glb");
