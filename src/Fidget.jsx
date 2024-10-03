import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Switch } from "./Switch";
import { Dial } from "./DIal";
import { SmallDial } from "./SmallDial";
import { Slider } from "./Slider";
import { Ball } from "./Ball";
import { LargeButton } from "./LargeButton";
import { SmallButton } from "./SmallButton";
import { KeyboardKey } from "./KeyboardKey";

export function Fidget(props) {
  const { nodes, material } = useGLTF("/fidget.glb");
  const roughnessMap = useTexture("./fidget_roughness_map.png");
  const albedo = useTexture("./fidget_albedo.png");
  roughnessMap.flipY = false;
  albedo.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube009.geometry} material={nodes.Cube009.material} position={[0, 0, 0]}>
        <meshStandardMaterial color='#FFFFFF' roughness={0.5} roughnessMap={roughnessMap} metalness={0.1} map={albedo} />
      </mesh>
      <Switch />
      <Switch position={[0, 0, -0.62]} />
      <Switch position={[0, 0, -1.24]} />
      <Dial />
      <SmallDial />
      <SmallDial position={[0.505, 0, 0]} />
      <SmallDial position={[1.01, 0, 0]} />
      <Slider />
      <Ball />
      <LargeButton />
      <LargeButton position={[0, 0, 1]} />
      <LargeButton position={[0, -1, 1]} />
      <LargeButton position={[0, -1, 0]} />
      <SmallButton />
      <KeyboardKey />
      <KeyboardKey position={[-1, 0, 0]} />
      <KeyboardKey position={[-1, 0, -1]} />
      <KeyboardKey position={[0, 0, -1]} />
    </group>
  );
}

useGLTF.preload("/fidget.glb");
