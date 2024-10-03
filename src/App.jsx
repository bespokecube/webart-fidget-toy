import React, { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { ToneMappingMode } from "postprocessing";
import { Perf } from "r3f-perf";
import { EffectComposer, ToneMapping, Bloom } from "@react-three/postprocessing";
import { Fidget } from "./Fidget";
import { Preloader } from "./Preloader";

const Scene = () => {
  return (
    <>
      <Fidget />
      <Environment preset='warehouse' intensity={10} blur={0.8} />
      <ambientLight intensity={0.9} />
      {/* <pointLight position={[10, 10, 10]} intensity={1000} /> */}
    </>
  );
};

const App = () => {
  const [isPerfMonitorEnabled, setIsPerfMonitorEnabled] = useState(false);

  return (
    <>
      <button className='perf-monitor-toggle-btn' onClick={() => setIsPerfMonitorEnabled(prevState => !prevState)}></button>

      <Canvas dpr={[1, 2]} camera={{ zoom: 1.3, position: [0, 4, 9], rotation: [0, 0, 0] }}>
        {isPerfMonitorEnabled && <Perf position='top-left' />}
        <OrbitControls />
        <Suspense fallback={<Preloader />}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <ToneMapping mode={ToneMappingMode.NEUTRAL} />
          <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0.3} levels={3} luminanceSmoothing={0.4} />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
