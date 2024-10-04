import React, { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Center, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ToneMappingMode } from "postprocessing";
import { Perf } from "r3f-perf";
import { EffectComposer, ToneMapping, Bloom } from "@react-three/postprocessing";
import { Fidget } from "./Fidget";
import { Preloader } from "./Preloader";

const Scene = () => {
  return (
    <>
      <Center>
        <Fidget />
      </Center>
      <Environment preset='warehouse' blur={1} intensity={1} />
      <ambientLight intensity={0.9} />
      <pointLight position={[1, 10, 1]} intensity={100} />
      <pointLight position={[1, -10, 1]} intensity={100} />
    </>
  );
};

const App = () => {
  const [isPerfMonitorEnabled, setIsPerfMonitorEnabled] = useState(false);

  return (
    <>
      <button className='perf-monitor-toggle-btn' onClick={() => setIsPerfMonitorEnabled(prevState => !prevState)}></button>

      <Canvas dpr={[1, 2]} shadows>
        {isPerfMonitorEnabled && <Perf position='top-left' />}
        <PerspectiveCamera makeDefault fov={40} position={[0, 4, 9]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Suspense fallback={<Preloader />}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <ToneMapping mode={ToneMappingMode.NEUTRAL} />
          {/* <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0.3} levels={3} luminanceSmoothing={0.4} /> */}
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
