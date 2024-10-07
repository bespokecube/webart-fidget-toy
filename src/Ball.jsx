import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { easings } from "@react-spring/web";

export function Ball(props) {
  const { nodes, materials } = useGLTF("/fidget_ball.glb");
  const roughnessMap = useTexture("./fidget_roughness.jpg");

  const meshRef = useRef();

  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { duration: 300, easing: easings.easeInOutQuad },
  }));

  const handleClick = e => {
    e.stopPropagation();

    if (meshRef.current) {
      const newRotation = [
        (meshRef.current.rotation.x += Math.PI),
        (meshRef.current.rotation.y += Math.PI),
        (meshRef.current.rotation.z += Math.PI),
      ];
      api.start({ rotation: newRotation });
    }
  };

  return (
    <group {...props} dispose={null}>
      <animated.mesh
        ref={meshRef}
        geometry={nodes.Icosphere.geometry}
        position={[0, 0, -0.535]}
        rotation={spring.rotation}
        scale={0.777}
        onClick={handleClick}
      >
        <meshStandardMaterial color='#A0A0A0' roughness={0.5} roughnessMap={roughnessMap} metalness={1} />
      </animated.mesh>
    </group>
  );
}

useGLTF.preload("/fidget_ball.glb");
